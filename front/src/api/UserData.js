import api from "./api";


export const sendUser = (data, token) => api.post("http://localhost:8080/api/user/info", data, {headers: {Authorization: token}});
export const test = (token) => api.get("http://localhost:8080/api/user/mypage", {headers: {Authorization: token}})