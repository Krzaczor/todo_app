import types from './types';
import nanoid from 'nanoid';

const INIT_TASKS = {
    list: [
        {
            id: "JIo4j3io2d",
            content: "Pierwsze zadanie do zrobienia",
            done: false,
            create: new Date().getTime()
        },
        {
            id: "43ji2oj4io23",
            content: "Drugie zadanie do zrobienia",
            done: true,
            create: new Date().getTime() + 98765
        },
        {
            id: "GYT213f21yj3io21",
            content: "Trzecie zadanie do zrobienia",
            done: false,
            create: new Date().getTime() - 1202334
        },
        {
            id: "h32ui3giuedg87d",
            content: "Czwarte zadanie do zrobienia",
            done: true,
            create: new Date().getTime() + 7458399
        },
        {
            id: "HUiyge3yugHu3i21h3i",
            content: "Piąte zadanie do zrobienia",
            done: true,
            create: new Date().getTime() - 129867
        }
    ]
};

const tasksReducer = (state = INIT_TASKS, action) => {
    switch (action.type) {
        case types.ADD_TASK: {
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

            return {
                ...state,
                list: [...state.list, {
                    id: randomId,
                    content: action.content || '',
                    done: false,
                    create: new Date().getTime()
                }]
            }
        }

        case types.DONE_TASKS: {
            const arrayId = Array.isArray(action.id) ? action.id : Array(action.id);

            return {
                ...state,
                list: state.list.map(task => {
                    if (arrayId.includes(task.id) && task.done === false) {
                        task.done = true
                    }
                    return task;
                })
            }
        }

        case types.REMOVE_TASKS: {
            const arrayId = Array.isArray(action.id) ? action.id : Array(action.id);

            return {
                ...state,
                list: state.list.filter(task => !arrayId.includes(task.id))
            }
        }

        default:
            return state
    }
}

export default tasksReducer;
