import types from './types';

const toggleTasksManagement = (id) => ({
    type: types.TOGGLE_TASKS_MANAGEMENT, id
});

const resetTasksManagement = () => ({
    type: types.RESET_TASKS_MANAGEMENT
});

export default {
    toggleTasksManagement,
    resetTasksManagement
};
