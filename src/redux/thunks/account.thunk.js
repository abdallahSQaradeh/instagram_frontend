/* eslint-disable import/prefer-default-export */
import authAxios from "../../axios/auth";
import * as actionTypes from "../actionTypes";

export async function logOut(dispatch, getState) {
  authAxios
    .post("logout/", {
      refresh: localStorage.getItem("refresh_token"),
    })
    .then((response) => {
      dispatch({ type: actionTypes.LOGOUT });
      dispatch({ type: actionTypes.HIDE_NAVBAR });
    })
    .catch((err) => {
      console.dir(err);
    });
}
