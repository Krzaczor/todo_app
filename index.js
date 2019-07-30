/**
 *  entry file for wabpack config
 *
 *  ./src/App.js is main file for ./src/ folder
 */

import $ from './core';
import App from "./src/App";

document.getElementById("root").appendChild(
    $(App).render()
);
