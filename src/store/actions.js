import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "vue-sonner";

export default {
  async LOGIN({ state }, { email, password }) {
    const LOGIN_URL = `${state.url_cerberus_api}/api/auth/login`;
    const params = {
      email,
      password,
      clientSecret: state.client_secret,
    };
    try {
      const data = await axios.post(LOGIN_URL, params);
      return data;
    } catch (error) {
      throw error;
    }
  },

  SET_TOKEN({ state }, token) {
    Cookies.set("authData", token);
  },

  async GET_MILITARY_FORCES({ state, commit }) {
    try {
      const { data } = await axios.get(
        `${state.url_cerberus_api}/api/military-forces`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authData")}`,
          },
        }
      );

      commit("SET_MILITARY_FORCES", data.data);
    } catch (error) {
      throw error;
    }
  },

  async GET_BASIC_INFO({ state, commit }) {
    try {
      const URL = `${state.url_cerberus_api}/api/military-personnel/profile`;
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${Cookies.get("authData")}`,
        },
      });
      commit("SET_BASIC_INFO", data.data);
      commit("SET_MILITARY_USERS", data.data);
    } catch (error) {
      throw error;
    }
  },

  async GET_SECURITY_NODES({ state, commit }) {
    try {
      const URL = `${state.url_cerberus_api}/api/military-installations/security-nodes`;
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${Cookies.get("authData")}`,
        },
      });
      commit("SET_SECURITY_NODES", data.data);
    } catch (error) {}
  },

  async CONNECT_BROKER({ commit, dispatch, getters }) {
    const client = getters.broker;
    client.on("connect", () => commit("SET_BROKER", client));

    client.on("error", () => {
      toast.error("Error al conectar con el servidor de mensajes", {
        description: "Por favor, intente nuevamente más tarde",
      });
    });

    client.on("message", (topic, message) => {
      console.log(topic);
      if (topic === "pinged") {
        dispatch("SHOW_MESSAGE", {
          type: "success",
          title: "¡Éxito!",
          description: "Se ha recibido un mensaje de ping",
        });
      }

      if (topic === "anomally") {
        let objectDetected = "";
        if (message.toString() === "person") {
          objectDetected = "persona";
        }

        dispatch("SHOW_MESSAGE", {
          type: "error",
          title: "¡Alerta!",
          description: `Se ha detectado una ${objectDetected} en una zona restringida`,
        });
      }
    });
  },

  async PUBLISH({ state }, { topic, msg }) {
    state.broker.publish(topic, msg);
  },

  async SUBSCRIBE({ state }, { topic }) {
    state.broker.subscribe(topic);
  },

  async UNSUBSCRIBE({ state }, { topic }) {
    state.broker.unsubscribe(topic);
  },

  SHOW_MESSAGE({}, { type, title, description }) {
    toast[type](title, {
      description,
    });
  },
};
