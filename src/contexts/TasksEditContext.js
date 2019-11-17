import React from 'react';

import { TasksEdit } from './TasksEdit';

class TasksEditContext extends React.Component {
    constructor() {
        super();
        this.state = {
            tasksToEdit: new Set(),
            toggleTaskEdit: this.toggleTaskEdit,
            resetTaskEdit: this.resetTaskEdit
        }
    }

    toggleTaskEdit = (id) => {
        console.log(this.state);
        this.setState(({tasksToEdit}) => ({
            tasksToEdit: tasksToEdit.has(id) ? new Set(tasksToEdit).remove(id) : new Set(tasksToEdit).add(id)
        }));
    }
    
    resetTaskEdit = () => {
        this.setState({
            tasksToEdit: this.state.tasksToEdit.clear()
        })
        
    }

    render() {
        return (
            <TasksEdit.Provider value={this.state}>
                { this.props.children }
            </TasksEdit.Provider>
        );
    }
}

export default TasksEditContext;
