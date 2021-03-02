/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function PrivateRouter({ component: Component, ...rest }) {
  /* const [auth, setAuth] = useState(true);
  useEffect(() => {
    if (
      localStorage.getItem("access-token") &&
      localStorage.getItem("refresh_token")
    ) {
      axiosAuth
        .post("token/verify/", { token: localStorage.getItem("access-token") })
        .then((res) => {
          console.log("auth true");
          setAuth(true);
        })
        .catch((err) => {
          if (localStorage.getItem("refresh_token")) {
            axiosAuth
              .post("token/refresh/", {
                refresh: localStorage.getItem("refresh_token"),
              })
              .then((result) => {
                console.log("auth true");
                setAuth(true);
              })
              .catch((error) => {
                console.log("auth false");
                setAuth(false);
              });
          }
        });
    }
  }, [auth, setAuth]); */
  const auth = useSelector((state) => state.user.authenticated);
  return auth === true ? (
    <Route path={rest.path} exact={rest.exact}>
      <Component {...rest} />
    </Route>
  ) : (
    <>
      <Redirect to={{ pathname: "/login", state: { from: rest.location } }} />
    </>
  );
}

PrivateRouter.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.object.isRequired,
};
