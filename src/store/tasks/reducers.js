import types from './types';
import ls from 'local-storage';
import nanoid from 'nanoid';

const INIT_TASKS = {
    list: ls.get('tasks') || []
};

const tasksReducer = (state = INIT_TASKS, action) => {
    switch (action.type) {
        case types.ADD_TASK: {
            let list;
            let randomId;

            do {
                randomId = nanoid();
            } while (
                /**
                 * this.state.tasks.some(task => task.id === idNextTask)
                 *
                 * wcześniejszy zapis sprawdzania czy id się powtarza
                 * Reactowy komunikat: Function declared in a loop contains unsafe references to variable(s) 'idNextTask'
                 */

                state.list.map(item => item.id).includes(randomId)
            );

            list = [...state.list, {
                id: randomId,
                content: action.content || '',
                done: false,
                create: new Date().getTime()
            }];

            ls.set('tasks', list);

            return { ...state, list }
        }

        case types.DONE_TASKS: {
            let list;
            const arrayId = Array.isArray(action.id) ? action.id : Array(action.id);

            list = state.list.map(task => {
                if (arrayId.includes(task.id) && task.done === false) {
                    task.done = true
                }
                return task;
            });

            ls.set('tasks', list);

            return { ...state, list }
        }

        case types.REMOVE_TASKS: {
            let list;
            const arrayId = Array.isArray(action.id) ? action.id : Array(action.id);

            list = state.list.filter(task => !arrayId.includes(task.id));
            ls.set('tasks', list);

            return { ...state, list }
        }

        default:
            return state
    }
}

export default tasksReducer;
