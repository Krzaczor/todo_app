import $ from "../core";
import Menu from './components/Menu';
import Tasks from './components/Tasks';

class App {
    render() {
        return $("fragment",
            $("h1", {className: "sr-only"}, "Lista zadań"),
            $("div", {className: "navbar"}, 
                $(Menu)
            ),
            $("div", {className: "main"},
                $("ul", {className: "list"},
                   $(Tasks)
                )
            )
        )
    }
}

export default App;
