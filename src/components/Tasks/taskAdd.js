import $ from '../../../core';

class TaskAdd {
    render() {
        return (
            $("div", {className: "task-item task-add"},
                $("h2", {className: "sr-only"}, "Dodawanie zadania"),
                $("textarea", {className: "task-field"})
            )
        )
    }
}

export default TaskAdd;