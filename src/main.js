import { createApp } from "vue";
import router from "./router";
import "./assets/styles/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
