import $ from '../../../core';
import Events from '../../Events';

class Menu {
    constructor() {
        $(Events, {menu: Menu});
    }

    one(id) {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", Events.showIndex.bind(Menu)]]}, "wróć"),
                $("button", {className: "btn btn-menu", event: [["click", Events.doneTask.bind(Menu, id)]]}, "wykonano"),
                $("button", {className: "btn btn-menu", event: [["click", Events.removeTask.bind(Menu, id)]]}, "usuń")
            )
        )
    }

    add() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", Events.showIndex.bind(Menu)]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: ["click", Events.createTask]}, "utwórz")
            )
        )
    }

    action() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", Events.showIndex.bind(Menu)]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: [["click", Events.showAdd.bind(Menu)]]}, "dodaj")
            )
        )
    }

    index() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", Events.showAction.bind(Menu)]]}, "zarządzaj"),
                $("button", {className: "btn btn-menu", event: [["click", Events.showAdd.bind(Menu)]]}, "dodaj")
            )
        )
    }

    render() {
        return this.index();
    }
}

export default Menu;
