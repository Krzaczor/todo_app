import $ from '../../../core';
import TasksController from './controller';
import Events from '../../Events';

class Tasks {
    constructor() {
        this.state = {
            tasks: $(TasksController).getAll()
        }
    }

    item(task) {
        const { id, content, done, create } = task;

        return (
            $("fragment",
                $("button", {className: "btn btn-task", event: [["click", $(Events, Tasks).showOne]], data: [["id", id], ["done", done]]},
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
                    done ? this.done() : this.todo(id),
                    this.remove(id)
                )
            )
        )
    }

    add() {
        return (
            $("div", {className: "task-item task-add"},
                $("h2", {className: "sr-only"}, "Dodawanie zadania"),
                $("textarea", {className: "task-field"})
            )
        )
    }

    todo(id) {
        return (
            $("button", { className: "btn btn-action icon-ok", data: [ ["id", id], ["type", "done"] ] },
                $("span", {className: "sr-only"}, "oznacz jako zrobione")
            )
        )
    }

    remove(id) {
        return (
            $("button", { className: "btn btn-action btn__remove icon-remove", data: [ ["id", id], ["action", "remove"] ] },
                $("span", {className: "sr-only"}, "usuń")
            )
        )
    }

    done() {
        return (
            $("span", {className: "btn-action btn__done icon-ok"}, 
                $("span", {className: "sr-only"}, "wykonane")
            )
        )
    }

    one(task) {
        const { id, done, create, content = '...' } = task;
        
        return (
            $("div", {className: "task-item", id},
                $("div", {className: "task-info"},
                    $("p", {className: "task-date"}, create),
                    done ? this.done() : $("fragment")
                ),
                $("h3", {className: "task-content task-text"}, content)
            )
        )
    }

    showItem() {
        return this.state.tasks.map((task) => {
            return $("li", {className: "list-item"},
                this.item(task)
            )
        })
    }

    showOne() {
        return this.state.tasks.map((task) => {
            return this.one(task);
        })
    }
    
    render() {
        return (
            $("fragment",
                $("ul", {className: "list"},
                    this.showItem.call(this)
                ),
                $("div", {className: "task"},
                    this.showOne.call(this),
                    this.add()
                )
            )
        ) 
    }
}

export default Tasks;
