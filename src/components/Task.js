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

    boxDone() {
        if (this.state.task.done) {
            return $("span", {className: "btn-action btn__done icon-ok"}, 
                $("span", {className: "sr-only"}, "wykonane")
            )
        }

        return (
            $("button", 
                {
                    className: "btn btn-action icon-ok",
                    event: []
                }, 
                $("span", {className: "sr-only"}, "oznacz jako zrobione")
            )
        )
    }

    boxRemove() {
        return (
            $("button",
                {
                    className: "btn btn-action btn__remove icon-remove",
                    data: [
                        ["id", this.state.task.id],
                        ["action", "remove"],
                    ]
                }, 
                $("span", {className: "sr-only"}, "usuń")
            )
        ) 
    }

    actionsSection() {
        return (
            $("div", {className: "list-action"},
                this.boxDone(),
                this.boxRemove()
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
                this.actionsSection()
            )
        )
    }
}

export default Task;