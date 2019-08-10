import $ from '../../../core';
import TasksController from './controller';
import Events from '../../Events';

class Tasks {
    constructor() {
        this.tasks = $(TasksController).getAll();
        $(Events, {tasks: Tasks});
    }

    item(task) {
        const { id, content, done, create } = task;

        return (
            $("fragment",
                $("button", {className: "btn btn-task", event: [["click", Events.showOne.bind(Tasks, id)]]},
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
            $("button", { className: "btn btn-action icon-ok", event: [["click", Events.doneTask.bind(Tasks, id)]] },
                $("span", {className: "sr-only"}, "oznacz jako zrobione")
            )
        )
    }

    remove(id) {
        return (
            $("button", { className: "btn btn-action btn__remove icon-remove", event: [["click", Events.removeTask.bind(Tasks, id)]] },
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
        if (this.tasks.length === 0) {
            return $("li", {className: "list-item"},
                $("span", {style: "font-size: 30px"}, "Brak zadań")
            );
        } 

        return this.tasks.map((task) => {
            return $("li", {className: "list-item"},
                this.item(task)
            )
        });
    }

    showItemUpdated(list) {
        if (list.length === 0) {
            return $("li", {className: "list-item"},
                $("span", {style: "font-size: 30px"}, "Brak zadań")
            );
        }

        return list.map((task) => {
            return $("li", {className: "list-item"},
                this.item(task)
            )
        })
    }

    showOne() {
        return this.tasks.map((task) => {
            return this.one(task);
        })
    }

    showOneUpdated(list) {
        return list.map((task) => {
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
