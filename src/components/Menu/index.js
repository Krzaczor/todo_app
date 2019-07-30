import $ from '../../../core';
import Tasks from '../../actions/tasks/controller';

class Menu {
    constructor({page = "index", id = ""}) {
        this.state = {
            page,
            id
        }
    }

    toggleOneToIndex(id, now) {
        const taskOne = document.querySelector(`#${id}`);
        const main = document.querySelector(".main");
        const menu = document.querySelector(".navbar");

        taskOne.classList.toggle("show");
        menu.classList.add("animate");

        const toggle = this.setState({
            page: this.state.page !== "one" ? "one" : "index",
            id
        });

        setTimeout(() => {
            menu.classList.remove("animate");
            menu.innerHTML = null;
            menu.appendChild(toggle.render());
        }, 160);

        if (!now) {
            main.classList.toggle("noscroll");
        } else {
            setTimeout(() => {
                main.classList.toggle("noscroll");
            }, 300);
        }
    }

    toggleAddAndIndex(focus) {
        const menu = document.querySelector(".navbar");
        const addTaskContainer = document.querySelector(".task-add");
        const main = document.querySelector(".main");
        const textarea = document.querySelector(".task-field");

        const toggle = this.setState({
            page: this.state.page !== "add" ? "add" : "index"
        });
        
        addTaskContainer.classList.toggle("show");
        menu.classList.add("animate");
    
        setTimeout(() => {
            menu.classList.remove("animate");
            menu.innerHTML = null;
            menu.appendChild(toggle.render());
        }, 160);

        if (!focus) {
            textarea.blur();
            main.classList.toggle("noscroll");
        } else {
            setTimeout(() => {
                main.classList.toggle("noscroll");
                textarea.focus();
            }, 300);
        }
    }

    toggleActionAndindex() {
        const menu = document.querySelector(".navbar");
        const list = document.querySelector(".list");
        menu.innerHTML = null;

        list.classList.toggle("list-action__show");
        const toggle = this.setState({
            page: this.state.page !=="action" ? "action" : "index"
        });
        
        menu.classList.add("animate");

        setTimeout(() => {
            menu.classList.remove("animate");
            menu.innerHTML = null;
            menu.appendChild(toggle.render());
        }, 160);
    }

    addTaskAction() {
        const textarea = document.querySelector(".task-field");
        const newTask = $(Tasks).create(textarea.value);

        console.log(newTask);
        

        this.toggleAddAndIndex(false)
        textarea.value = null;
    }

    one() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", this.toggleOneToIndex.bind(this, this.state.id, false)]]}, "wróć"),
                $("button", {className: "btn btn-menu", data: [["id", this.state.id], ["type", "done"]]}, "wykonano"),
                $("button", {className: "btn btn-menu", data: [["id", this.state.id], ["type", "remove"]]}, "usuń")
            )
        )
    }

    add() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", this.toggleAddAndIndex.bind(this, false)]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: ["click", this.addTaskAction.bind(this)]}, "utwórz")
            )
        )
    }

    action() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", this.toggleActionAndindex.bind(this)]]}, "anuluj"),
                $("button", {className: "btn btn-menu", event: [["click", this.toggleAddAndIndex.bind(this, true)]]}, "dodaj")
            )
        )
    }

    index() {
        return (
            $("fragment",
                $("button", {className: "btn btn-menu", event: [["click", this.toggleActionAndindex.bind(this)]]}, "zarządzaj"),
                $("button", {className: "btn btn-menu", event: [["click", this.toggleAddAndIndex.bind(this, true)]]}, "dodaj")
            )
        )
    }

    render() {
        return this[ this.state.page ]();
    }
}

export default Menu;