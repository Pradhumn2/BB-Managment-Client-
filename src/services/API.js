import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  // req.headers.credentials = true;
  return req;
});

export default API;
