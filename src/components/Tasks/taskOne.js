import $ from '../../../core';
import Done from './done';
import Menu from '../Menu';

class TaskOne {
    constructor({id, content, done, create}) {
        this.state = {
            id,
            content,
            done,
            create
        }
    }

    backToTasks() {
        const menu = document.querySelector(".navbar");
        const list = document.querySelector(".list");
        const main = document.querySelector(".main");
        const taskOne = document.querySelector(`#${this.state.id}`);
        
        menu.innerHTML = null;
        menu.appendChild($(Menu));
        
        list.classList.remove("list-action__show");
        main.classList.remove("noscroll");
        taskOne.classList.remove("show");
    }

    render() {
        const { id, done, create, content = '...' } = this.state;
        return (
            $("div", {className: "task-item", id},
                $("div", {className: "task-info"},
                    $("p", {className: "task-date"}, create),
                    done ? $(Done) : $("fragment", "")
                ),
                $("h3", {className: "task-content"}, content),
                $("div", {className: "task-navbar"},
                    $("button", {className: "btn btn-menu", event: [["click", this.backToTasks.bind(this)]]}, "wróć"),
                    $("button", {className: "btn btn-menu", data: [["id", id], ["type", "done"]]}, "wykonano"),
                    $("button", {className: "btn btn-menu", data: [["id", id], ["type", "remove"]]}, "usuń")
                )
            )
        )
    }
}

export default TaskOne;
