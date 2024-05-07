import api from "./api";

export const sendUser = (data) => api.post("http://localhost:8080/api/user/info", {data});