import $ from '../../../core';
import Done from './done';
import Todo from './todo';
import Remove from './remove';

class TaskItem {
    constructor({id, content, done, create}) {
        this.state = {
            id,
            content,
            done,
            create
        }
    }

    showTaskOne() {
        const taskOne = document.querySelector(`#${this.state.id}`);
        const main = document.querySelector(".main");
        
        main.classList.add("noscroll");
        taskOne.classList.add("show");
        
    }

    render() {
        const { id, content, done, create } = this.state;
        
        return (
            $("fragment",
                $("button", {className: "btn btn-task", event: [["click", this.showTaskOne.bind(this)]]},
                    $("div", {className: "list-info"}, 
                        $("span", {}, create),
                        $("span", {className: done ? "icon-ok" : ""}, 
                            $("span", {className: "sr-only"}, done ? "wykonano" : "do zrobienia")
                        )
                    ),
                    $("div", {className: "list-content"}, 
                        $("p", {className: "list-description"}, content)
                    )
                ),
                $("div", {className: "list-action"},
                    this.state.done ? $(Done) : $(Todo, {id}),
                    $(Remove, {id})
                )
            )
        )
    }
}

export default TaskItem;
