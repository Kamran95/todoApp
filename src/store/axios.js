import axios from "axios";
import store from "./index";
export let url = "http://172.16.10.51:8002/api/";

export const public_url = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
export const private_url = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

//define request interceptors
private_url.interceptors.request.use(request => {
  let accesToken = store.getters["auth/getToken"];
  request.headers["Authorization"] = "Bearer".concat(" ", accesToken);
  return request;
});

//define response interceptors
private_url.interceptors.response.use(
  response => {

    return Promise.resolve(response);
  },
  error => {
    if (!error.response) {
    } else {
    }
    return Promise.reject(error);
  }
);
