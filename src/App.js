import $ from "../core";
import Menu from './components/Menu';
// import List from './components/List';

class App {
    render() {
        return $("fragment",
            $("h1", {className: "sr-only"}, "Lista zadań"),
            $(Menu),
            // $(List)
        )
    }
}

export default App;
