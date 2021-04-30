import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const WithHotReload = process.env.NODE_ENV === "production" ? App : hot(App);

ReactDOM.render(<WithHotReload />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();