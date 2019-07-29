import $ from '../../../core';

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

    show(textFirstButton) {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: ["click", this.toggleMenu.bind(this)]}, textFirstButton),
                $("button", {className: "btn btn-menu"}, "dodaj")
            )
        )
    }

    render() {
        return this.show.call(this, 
            this.state.view === "index" ? "zarządzaj" : "anuluj"
        )
    }
}

export default Menu;