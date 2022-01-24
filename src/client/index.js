import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
// import { AppContext } from "./components/Context/Context";

ReactDOM.render(
  <Router>
    <App />
    </Router>,
  document.getElementById("root")
);
