import * as actionTypes from "../actionTypes";

const initialState = {
  footer: false,
  navbar: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_FOOTER:
      return { ...state, footer: true };
    case actionTypes.SHOW_NAVBAR:
      return { ...state, navbar: true };
    case actionTypes.HIDE_FOOTER:
      return { ...state, footer: false };
    case actionTypes.HIDE_NAVBAR:
      return { ...state, navbar: false };
    default:
      return { ...state };
  }
}
