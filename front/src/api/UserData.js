import api from "./api";


export const sendUser = (data, token) => api.post("http://localhost:8080/api/user/info", data, {headers: {Authorization: token}});
export const getProfile = (token) => api.get("http://localhost:8080/api/user/mypage", {headers: {Authorization: token}});
export const getAllProfile = (token) => api.get("http://localhost:8080/api/user/all", {headers: {Authorization: token}});
export const getRoommate = (token) => api.get("http://localhost:8080/api/roommate/edit/view", {headers: {Authorization: token}});
export const editRoommate = (data, token) => api.post("http://localhost:8080/api/roommate/edit", data, {headers: {Authorization: token}});
export const postFlask = (data, token) => api.post("http://localhost:8080/flask/matching", {purpose: data}, {headers: {Authorization: token}});
export const editProfile = (data, token) => api.post("http://localhost:8080/api/user/edit/info", data, {headers: {Authorization: token}});
export const editFriend = (data, token) => api.post("http://localhost:8080/api/user/edit/friend", data, {headers: {Authorization: token}});
export const getMatching = (token) => api.get("http://localhost:8080/api/user/meta", {headers: {Authorization: token}});