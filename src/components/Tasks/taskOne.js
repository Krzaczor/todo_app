import $ from '../../../core';
import Done from './done';

class TaskOne {
    constructor({id, content, done, create}) {
        this.state = {
            id,
            content,
            done,
            create
        }
    }

    render() {
        const { id, done, create, content = '...' } = this.state;
        
        return (
            $("div", {className: "task-item", id},
                $("div", {className: "task-info"},
                    $("p", {className: "task-date"}, create),
                    done ? $(Done).render() : $("fragment")
                ),
                $("h3", {className: "task-content task-text"}, content)
            )
        )
    }
}

export default TaskOne;
