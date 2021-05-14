import types from './types';
import ls from 'local-storage';
import { nanoid } from 'nanoid';
import { mapper } from '../../helpers/mapper';

const initTasks = () => {
    let tasks = ls.get('tasks') || [];
    tasks = tasks.map(task => mapper(task));

    return tasks;
}

const tasksReducer = (state = initTasks(), action) => {
    switch (action.type) {
        case types.ADD_TASK: {
            const tasks = [...state, {
                id: nanoid(),
                content: action.content,
                done: false,
                create: new Date()
            }];

            ls.set('tasks', tasks);
            return tasks;
        }

        case types.DONE_TASK: {
            const arrayId = Array.isArray(action.id) ? action.id : [action.id];

            const tasks = state.map(task => {
                if (arrayId.includes(task.id) && task.done === false) {
                    task.done = true
                }
                return task;
            });

            ls.set('tasks', tasks);
            return tasks;
        }

        case types.REMOVE_TASK: {
            const arrayId = Array.isArray(action.id) ? action.id : [action.id];
            const tasks = state.filter(task => !arrayId.includes(task.id));

            ls.set('tasks', tasks);
            return tasks;
        }

        default:
            return state
    }
}

export default tasksReducer;
