import * as actionTypes from "../actionTypes";

const initialState = {
  postDetailModal: null,
  postMoreModal: null,
  postLikesModal: null,
  postUploadModal: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POST_MORE_MODAL:
      return { ...state, postDetailModal: action.data };
    case actionTypes.POST_UPLOAD_MODAL:
      return { ...state, postUploadModal: true };
    case actionTypes.CLOSE_POST_UPLOAD_MODAL:
      return { ...state, postUploadModal: null };
    default:
      return state;
  }
}
