/* eslint-disable prettier/prettier */

import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import MoreModal from "./pages/home/modals/more.modal";
import PrivateRouter from "./routers/private-router";
import theme from "./theme/theme";

import Login from "./pages/login/login.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home/home.component";
import UserProfile from "./pages/user-profile/user-profile.component";
import SignUp from "./pages/sign-up/sign-up.index";
import PostUploaderModal from "./components/post-uploader/postUploaderModal.component";

function App() {
  const modals = useSelector((state) => state.modal);
  const ui = useSelector((state) => state.ui);
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main className="main">
          {history.location.pathname === "/login" ||
          history.location.pathname === "/signup" ? null : (
            <Navbar />
          )}
          <div className="inner-main">
            <Switch>
              <Route path="/profile">
                <UserProfile />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <PrivateRouter path="" component={Home} exact={false} />
            </Switch>
          </div>
        </main>

        {modals.postDetailModal ? <div> yes </div> : null}
        {modals.postMoreModal ? <MoreModal /> : null}
        {modals.postUploadModal ? <PostUploaderModal /> : null}

        {ui.footer ? <Footer /> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
