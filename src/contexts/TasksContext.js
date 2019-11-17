import React from 'react';

import { Tasks } from './Tasks';

import ls from 'local-storage';
import nanoid from 'nanoid';

class TasksContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ls.get('tasks') || [],
            addTask: this.addTask,
            doneTask: this.doneTask,
            removeTask: this.removeTask
        }
    }

    addTask = (contentNextTask) => {
        let idNextTask;

        const findId = function({id}) {
            return idNextTask === id;
        }

        do {
            idNextTask = nanoid();
        } while (this.state.tasks.findIndex(findId) !== -1)

        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, {
                    id: idNextTask,
                    content: contentNextTask,
                    done: false,
                    created: new Date()
                }]
            }
        }, () => {
            ls.set('tasks', this.state.tasks);
        });
    }

    doneTask = (idTask) => {
        let tasksList = new Set(this.state.tasks);

        tasksList.forEach(task => {
            if (task.id === idTask) {
                task.done = true;
            }
        });

        tasksList = Array.from(tasksList);

        this.setState({
            tasks: tasksList
        }, () => {
            ls.set('tasks', tasksList);
        });
    }

    removeTask = (idTask) => {
        let tasksList = new Set(this.state.tasks);

        tasksList.forEach(task => {
            if (task.id === idTask) {
                tasksList.delete(task);
            }
        });

        tasksList = Array.from(tasksList);

        this.setState({
            tasks: tasksList
        }, () => {
            ls.set('tasks', tasksList);
        });
    }

    render() {
        return (
            <Tasks.Provider value={this.state}>
                { this.props.children }
            </Tasks.Provider>
        );
    }
}

export default TasksContext;
