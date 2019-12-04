import types from './types';

const toggle = (id) => ({
    type: types.TOGGLE_TASK_EDIT, id
});

const reset = () => ({
    type: types.RESET_TASKS_EDIT
});

export default {
    toggle,
    reset
};
