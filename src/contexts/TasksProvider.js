import React from 'react';

import { Tasks } from './Tasks';

import ls from 'local-storage';
import nanoid from 'nanoid';

class TasksProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ls.get('tasks') || [],
            addTask: this.addTask,
            doneTasks: this.doneTasks,
            removeTasks: this.removeTasks
        }
    }

    addTask = (contentNextTask) => {
        let idNextTask;

        do {
            idNextTask = nanoid();
        } while (
            this.state.tasks.map(item => item.id).includes(idNextTask)

            /**
             * this.state.tasks.some(task => task.id === idNextTask)
             * 
             * wcześniejszy zapis sprawdzania czy id się powtarza
             * Reactowy komunikat: Function declared in a loop contains unsafe references to variable(s) 'idNextTask'
             */
        );

        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, {
                    id: idNextTask,
                    content: contentNextTask,
                    done: false,
                    created: new Date().getTime()
                }]
            }
        });

        ls.set('tasks', this.state.tasks);
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
