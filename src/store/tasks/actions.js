import types from './types';

const addTask = content => ({
    type: types.ADD_TASK, content
});

const doneTask = id => ({
    type: types.DONE_TASK, id
});

const removeTask = id => ({
    type: types.REMOVE_TASK, id
});

export default {
    addTask,
    doneTask,
    removeTask
}

