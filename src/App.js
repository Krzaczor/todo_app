/**
 *  main file for /src/ folder
 */

import $ from "./core";
import Header from "./components/Header";
import "./App.css";


class App {
    constructor() {
        this.state = {};
    }
    
    render() {
        return $(Header);
        
        // return core.createElement();
    }
}

export default App;
