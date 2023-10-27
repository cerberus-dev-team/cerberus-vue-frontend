import * as mqtt from "mqtt/dist/mqtt.min";

const URL_CERBERUS_API = "http://127.0.0.1:5000";
const CLIENT_SECRET = "z^bD1[,gQNR^V9JGkQDjsRZ5Fd}#Qs";
const mqttOptions = {
  host: import.meta.env.VITE_MQTT_HOST,
  port: import.meta.env.VITE_MQTT_PORT,
  username: import.meta.env.VITE_MQTT_USERNAME,
  password: import.meta.env.VITE_MQTT_PASSWORD,
  protocol: import.meta.env.VITE_MQTT_PROTOCOL,
  path: import.meta.env.VITE_MQTT_PATH,
};

export default {
  url_cerberus_api: URL_CERBERUS_API,
  client_secret: CLIENT_SECRET,
  militaryForces: [],
  militaryUsers: [],
  basicInfo: null,
  securityNodes: [],
  broker: mqtt.connect(
    `${mqttOptions.protocol}://${mqttOptions.host}${mqttOptions.path}`,
    {
      ...mqttOptions,
    }
  ),
};
