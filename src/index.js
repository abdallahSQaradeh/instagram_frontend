import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import postsReducer from "./redux/reducers/post.reducer";
import modalsReducer from "./redux/reducers/modal.reducer";
import uiReducer from "./redux/reducers/ui.reducer";
import userReducer from "./redux/reducers/user.reducer";

const rootReducer = combineReducers({
  modal: modalsReducer,
  post: postsReducer,
  ui: uiReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
