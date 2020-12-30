import "./App.css";
// import cloneDeep from "lodash.clonedeep";
import axios from "axios";
import { useEffect } from "react";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  useEffect(() => {
    axios.get("http://localhost:8000/api/users/").then((res) => {
      console.log(res.data);
    });
  });
  return <div className="App" />;
}

export default App;
