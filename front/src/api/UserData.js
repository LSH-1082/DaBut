import api from "./api";


export const sendUser = (data, token) => api.post("http://localhost:8080/api/user/info", data, {headers: {Authorization: token}});