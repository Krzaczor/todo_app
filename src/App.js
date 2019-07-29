import $ from "../core";
import Menu from './components/Menu';
import List from './components/List';

class App {
    render() {
        return $("fragment",
            $("h1", {className: "sr-only"}, "Lista zadań"),
            $("div", {className: "navbar"}, 
                $(Menu)
            ),
            $("div", {className: "main"},
                $(List)
            )
        )
    }
}

export default App;
