import api from "./api";


export const sendUser = (data, token) => api.post("http://localhost:8080/api/user/info", data, {headers: {Authorization: token}});
export const getProfile = (token) => api.get("http://localhost:8080/api/user/mypage", {headers: {Authorization: token}});
export const getRoommate = (token) => api.get("http://localhost:8080/api/roommate/edit/view", {headers: {Authorization: token}});