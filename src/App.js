import $ from "../core";
import Page from './components/Page';

class App {
    render() {
        return $("fragment",
            $("h1", {className: "sr-only"}, "Lista zadań"),
            $(Page).render()
        )
    }
}

export default App;
