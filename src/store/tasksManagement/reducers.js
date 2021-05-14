import types from './types';

const INIT_TASKS_MANAGEMENT = [];

const tasksManagementReducer = (state = INIT_TASKS_MANAGEMENT, action) => {
    switch (action.type) {
        case types.TOGGLE_TASKS_MANAGEMENT: {
            if (state.includes(action.id)) {
                return state.filter(id => id !== action.id);
            }

            return [
                ...state,
                action.id
            ]
        }

        case types.RESET_TASKS_MANAGEMENT:
            return INIT_TASKS_MANAGEMENT;

        default:
            return state;
    }
}

export default tasksManagementReducer;
