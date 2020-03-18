import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import STORE from "./store";
//double check line below, not sure this is correct, should be store.js ??

ReactDOM.render(<App store={STORE} />, document.getElementById("root"));
