import types from './types';

const setAddingMode = () => ({
    type: types.MODE_ADD
});

const setEditingMode = () => ({
    type: types.MODE_EDIT
});

const setShowingMode = () => ({
    type: types.MODE_SHOW
});

const resetModes = () => ({
    type: types.RESET_MODE
});

export default {
    setAddingMode,
    setEditingMode,
    setShowingMode,
    resetModes
}
