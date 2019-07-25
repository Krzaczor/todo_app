import $ from '../../core';

class Task {
    constructor({id, content, done, create}) {
        this.state = {
            task: {
                id,
                content,
                done,
                create
            }
        }
    }

    createCheckbox() {
        return $("button", {className: "btn btn-check"}, 
            $("span", {className: "icon-circle-blank"})
        )
    }

    createDone() {
        return $("span", {className: "list-action__icon icon-ok"}, 
            $("span", {className: "sr-only"}, "wykonano")
        )
    }

    createActionSection() {
        return (
            $("div", {className: "list-action"},
                this.state.task.done ? this.createDone() : this.createCheckbox(),
                this.createCheckbox()
            )
        )
    }
    
    render() {
        const {content, done, create} = this.state.task;
        return (
            $("fragment",
                $("div", {},
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
                this.createActionSection()
            )
        )
    }
}

export default Task;