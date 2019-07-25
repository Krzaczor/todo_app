import $ from '../../core';

class Task {
    constructor({id, content, create}) {
        this.state = {
            task: {
                id,
                content,
                create
            }
        }
    }
    
    render() {
        return (
            $("fragment",
                $("p", {}, this.state.task.create),
                $("h2", {}, this.state.task.content)
            )    
        )
    }
}

export default Task;