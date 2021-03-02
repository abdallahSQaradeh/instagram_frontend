import { useDispatch } from "react-redux";
import axiosAuth from "../axios/auth";
import * as actionTypes from "../redux/actionTypes";

export default function useFacebook() {
  const dispatch = useDispatch();

  return (response, history) =>
    axiosAuth
      .post("facebook/", { access_token: response.accessToken })
      .then((solved) => {
        history.replace("");
        console.log(solved);
        dispatch({ type: actionTypes.AUTH_USER, user: solved.data.user });
      })
      .catch((err) => {
        if (
          err.response.status === 400 &&
          err.response.data.non_field_errors[0] ===
            "User is already registered with this e-mail address."
        ) {
          axiosAuth
            .post("facebook/connect/", {
              access_token: response.accessToken,
            })
            .then((resolved) => {
              history.replace("");
              console.log(resolved);
              dispatch({
                type: actionTypes.AUTH_USER,
                user: resolved.data.user,
              });
            })
            .catch((error) => {
              dispatch({ type: actionTypes.CANCEL_AUTH_USER });
            });
        }
      });
}
