import types from './types';

const toggleOnAdd = () => ({
    type: types.TOGGLE_ON_ADD
});

const toggleOnEdit = () => ({
    type: types.TOGGLE_ON_EDIT
});

const reset = () => ({
    type: types.RESET_MODE
});

export default {
    toggleOnAdd,
    toggleOnEdit,
    reset
}
