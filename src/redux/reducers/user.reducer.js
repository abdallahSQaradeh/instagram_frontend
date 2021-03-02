import * as actionTypes from "../actionTypes";

const initialState = {
  posts: [],
  authenticated: false,
  userInfo: null,
  expireIn: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return { ...state, authenticated: true, userInfo: action.user };
    case actionTypes.CANCEL_AUTH_USER:
      return { ...state, authenticated: false, userInfo: null };
    default:
      return { ...state };
  }
}
