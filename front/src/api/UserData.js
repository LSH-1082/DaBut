import api from "./api";
import Cookies from "js-cookie";

export const sendUser = (data) => api.post("http://localhost:8080/api/user/info", {data});