import $ from '../../../core';
import Done from './done';
import Todo from './todo';
import Remove from './remove';
import Menu from '../Menu';

class TaskItem {
    constructor({id, content, done, create}) {
        this.state = {
            id,
            content,
            done,
            create
        }
    }

    render() {
        const { id, content, done, create } = this.state;
        
        return (
            $("fragment",
                $("button", {className: "btn btn-task", event: [["click", $(Menu, {page: "one", id}).toggleOneToIndex.bind($(Menu, {}), id)]]},
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
                    done ? $(Done).render() : $(Todo, {id}).render(),
                    $(Remove, {id}).render()
                )
            )
        )
    }
}

export default TaskItem;
