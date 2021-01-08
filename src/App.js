import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import axios from "axios";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import SignUp from "./pages/sign-up/sign-up.index";
import theme from "./theme/theme";

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
        <SignUp />
      </div>
    </ThemeProvider>
  );
}

export default App;
