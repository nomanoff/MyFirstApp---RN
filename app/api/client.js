import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.200.176:3000",
});

export default apiClient;
