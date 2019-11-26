import React from 'react';

import { Tasks } from './Tasks';

import ls from 'local-storage';
import nanoid from 'nanoid';

class TasksProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ls.get('tasks') || [],
            tasksEdit: [],
            addTask: this.addTask,
            doneTask: this.doneTask,
            doneTasks: this.doneTasks,
            removeTask: this.removeTask,
            removeTasks: this.removeTasks,
            toggleTaskEdit: this.toggleTaskEdit,
            resetTaskEdit: this.resetTaskEdit
        }
    }

    addTask = (contentNextTask) => {
        let idNextTask;
        let tasks = [];

        do {
            idNextTask = nanoid();
        } while (this.state.tasks.some(task => task.id === idNextTask));

        tasks = [...this.state.tasks, {
            id: idNextTask,
            content: contentNextTask,
            done: false,
            created: new Date().getTime()
        }]

        this.setState({
            tasks
        }, () => {
            ls.set('tasks', tasks);
        });
    }

    doneTask = (idTask) => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === idTask) {
                task.done = true;
            }

            return task;
        });

        this.setState({
            tasks
        }, () => {
            ls.set('tasks', tasks);
        });
    }

    doneTasks = () => {
        let change = false;
        const tasks = this.state.tasks.map(task => {
            if (this.state.tasksEdit.includes(task.id)) {
                if (task.done === false) {
                    task.done = true;
                    change = true;
                }
            }

            return task;
        });

        if (change) {
            this.setState({
                tasks
            }, () => {
                ls.set('tasks', tasks);
            });
        }
    }

    removeTask = (idTask) => {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.filter(task => task.id !== idTask)
            }
        });

        ls.set('tasks', this.state.tasks);
    }

    removeTasks = () => {
        const tasks = this.state.tasks.filter(task => !this.state.tasksEdit.includes(task.id))

        this.setState({
            tasks
        }, () => {
            ls.set('tasks', tasks);
        });
    }

    toggleTaskEdit = (idTask) => {
        let tasks = this.state.tasksEdit;

        this.setState({
            tasksEdit: tasks.includes(idTask)
                ? tasks.filter(id => id !== idTask)
                : [...tasks, idTask]
        });
    }

    resetTaskEdit = () => {
        this.setState({
            tasksEdit: []
        });
    }

    render() {
        return (
            <Tasks.Provider value={this.state}>
                {this.props.children}
            </Tasks.Provider>
        );
    }
}

export default TasksProvider;
