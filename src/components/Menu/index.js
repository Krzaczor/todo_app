import $ from '../../../core';
import Events from '../../Events';

class Menu {
    constructor({id = "", done = false}) {
        this.state = {
            id,
            done
        }
    }

    one() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showIndex]]}, "wróć"),
                $("button", {className: "btn btn-menu", data: ["id", this.state.id], event: [["click", $(Events, Menu).doneTask]]}, "wykonano"),
                $("button", {className: "btn btn-menu", data: ["id", this.state.id], event: [["click", $(Events, Menu).removeTask]]}, "usuń")
            )
        )
    }

    add() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", $(Events, Menu).showIndex]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: ["click", $(Events, Menu).createTask]}, "utwórz")
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
