import $ from '../../../core';
import Events from '../../Events';

class Menu {
    constructor({id = "", done = false}) {
        this.state = {
            id,
            done
        }
    }

    done() {
        return $("fragment");
    }
    
    todo() {
        return $("button", {className: "btn btn-menu", data: [["id", this.state.id], ["type", "done"]]}, "wykonano");
    }

    one() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showIndex]]}, "wróć"),
                this.state.done ? this.done() : this.todo(),
                $("button", {className: "btn btn-menu", data: [["id", this.state.id], ["type", "remove"]]}, "usuń")
            )
        )
    }

    add() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showIndex]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: ["click"]}, "utwórz")
            )
        )
    }

    action() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showIndex]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showAdd]]}, "dodaj")
            )
        )
    }

    index() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showAction]]}, "zarządzaj"),
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showAdd]]}, "dodaj")
            )
        )
    }

    render() {
        return this.index();
    }
}

export default Menu;