/**
 *  entry file for wabpack config
 *
 *  ./src/App.js is main file for ./src/ folder
 */

import $ from './src/core';
import App from "./src/App";
import "./index.css";

document.getElementById("root").appendChild(
    $(App)
);
