import $ from '../../../core';
import TasksController from '../../actions/tasks/controller';
import TaskItem from './taskItem';

class Tasks {
    constructor() {
        this.state = {
            tasks: $(TasksController).getAll()
        }
    }

    show() {
        return this.state.tasks.map((task) => {
            return $("li", {className: "list-item"},
                $(TaskItem, task)
            )
        })
    }
    
    render() {
        return $("fragment",
            this.show.call(this)
        )
    }
}

export default Tasks;