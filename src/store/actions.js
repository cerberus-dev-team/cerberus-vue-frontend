import axios from "axios";
import Cookies from "js-cookie";

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
  async GET_ALL_USERS({ state, commit }) {
    try {
      const URL = `${state.url_cerberus_api}/api/military-personnel`;
      const { data } = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${Cookies.get("authData")}`,
        },
      })
      commit("SET_MILITARY_USERS", data.data);
    } catch (error) {
      throw error;
    }
  },
};
