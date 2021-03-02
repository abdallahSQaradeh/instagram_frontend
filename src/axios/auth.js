/* eslint-disable no-param-reassign */
import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = " http://127.0.0.1:8000/dj-rest-auth/";

instance.interceptors.request.use(
  (config) => {
    if (config.url === "facebook/connect/") {
      if (localStorage.getItem("access-token"))
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "access-token"
        )}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.data.access_token) {
      localStorage.setItem("access-token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
    }

    return response;
  },
  (error) => {
    if (
      error.response.status === 401 ||
      error.response.statusText === "Unauthorized"
    ) {
      if (localStorage.getItem("refresh_token") && true) {
        instance
          .post("token/verify/", {
            access_token: localStorage.getItem("access-token"),
          })
          .then((verified) => {
            return Promise.resolve(verified);
          })
          .catch((notVerified) => {
            instance
              .post("token/refresh/", {
                refresh: localStorage.getItem("refresh_token"),
              })
              .then((response) => {
                localStorage.removeItem("access-token");
                localStorage.setItem("access-token", response.data.access);
                return Promise.resolve(response);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          });
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
