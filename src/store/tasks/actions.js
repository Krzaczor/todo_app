import types from './types';

const add = content => ({
    type: types.ADD_TASK, content
});

const done = id => ({
    type: types.DONE_TASKS, id
});

const remove = id => ({
    type: types.REMOVE_TASKS, id
});

export default {
    add,
    done,
    remove
}

