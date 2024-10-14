import { Nexios } from "nexios-http";
import envConfig from "./envConfig";

const nexiosInstance = new Nexios({
  baseURL: `${envConfig.baseApi}`,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  timeout: 10000,
});

export default nexiosInstance;
