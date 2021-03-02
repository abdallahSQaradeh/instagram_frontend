import deepClone from "lodash.clonedeep";
import * as actionTypes from "../actionTypes";

const initialState = {
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_POST: {
      const newState = deepClone(state);
      newState.posts.push({
        src: action.post.src,
        caption: action.post.caption,
      });
      return newState;
    }
    default:
      return { ...state };
  }
}
