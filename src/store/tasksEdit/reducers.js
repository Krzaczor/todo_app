import types from './types';

const INIT_TASKS_EDIT = {
    list: []
}

const tasksEditReducer = (state = INIT_TASKS_EDIT, action) => {
    switch (action.type) {
        case types.TOGGLE_TASK_EDIT: {
            if (state.list.includes(action.id)) {
                return {
                    ...state,
                    list: state.list.filter(id => id !== action.id)
                }
            } else {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        action.id
                    ]
                }
            }
        }

        case types.RESET_TASKS_EDIT:
            return {
                ...state,
                list: []
            }

        default:
            return state
    }
}

export default tasksEditReducer;
