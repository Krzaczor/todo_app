import $ from '../../../core';
import TasksController from '../../actions/tasks/controller';
import TaskItem from './taskItem';
import TaskOne from './taskOne';

class Tasks {
    constructor() {
        this.state = {
            tasks: $(TasksController).getAll()
        }
    }

    showItem() {
        return this.state.tasks.map((task) => {
            return $("li", {className: "list-item"},
                $(TaskItem, task)
            )
        })
    }

    showOne() {
        return this.state.tasks.map((task) => {
            return $(TaskOne, task)
        })
    }
    
    render() {
        return (
            $("fragment",
                $("ul", {className: "list"},
                    this.showItem.call(this)
                ),
                $("div", {className: "task"},
                    this.showOne.call(this)
                )
            )
        ) 
    }
}

export default Tasks;
