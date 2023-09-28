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
      const  data  = await axios.post(LOGIN_URL, params);
      return data;
    } catch (error) {
      throw error;
    }
  },

  SET_TOKEN({state}, token) {
    Cookies.set("authData", token);
  }
};

