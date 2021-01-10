import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import axios from "axios";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import SignUp from "./pages/sign-up/sign-up.index";
import theme from "./theme/theme";
// import Login from "./pages/login/login.component";
import Footer from "./components/footer/footer.component";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  useEffect(() => {
    axios.get("http://localhost:8000/api/users/").then((res) => {
      console.log(res.data);
    });
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main className="main">
          <div className="inner-main">
            {/*  <Login /> */}
            <SignUp />
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
