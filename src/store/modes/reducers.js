import types from './types';

const INIT_MODES = {
    add: false,
    edit: false,
    show: false
}

const modesReducer = (state = INIT_MODES, action) => {
    switch (action.type) {
        case types.MODE_ADD:
            return {
                add: true,
                edit: false,
                show: false
            }

        case types.MODE_EDIT:
            return {
                add: false,
                edit: true,
                show: false
            }

        case types.MODE_SHOW:
            return {
                add: false,
                edit: false,
                show: true
            }

        case types.RESET_MODE:
            return INIT_MODES;

        default:
            return state;
    }
}

export default modesReducer;
