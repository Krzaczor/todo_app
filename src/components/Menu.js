import $ from '../../core';

class Menu {
    constructor(view) {
        this.state = {
            view: view || "index"
        }
    }

    event() {
        document.querySelector(".list").classList.toggle("list-action__show");
        const menu = document.querySelector(".navbar");
        menu.innerHTML = null;
        
        const view = this.setState({
            view: this.state.view === "index" ? "actions" : "index"
        });
        
        menu.appendChild(view);
    }

    toggleMenu() {
        this.event();
    }

    boxAddTask() {
        return $("button", {className: "btn btn-menu"}, "dodaj")
    }

    actions() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: ["click", this.toggleMenu.bind(this)]}, "anuluj"),
                this.boxAddTask()
            )
        )
    }

    index() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: ["click", this.toggleMenu.bind(this)]}, "zarządzaj"),
                this.boxAddTask()
            )
        )
    }

    render() {
        return (
            $("fragment",
                this[ this.state.view ].call(this)
            )
        )
    }
}

export default Menu;