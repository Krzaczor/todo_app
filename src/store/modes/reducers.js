import types from './types';

const INIT_MODE = {
    list: {
        add: false,
        edit: false
    }
}

const modesReducer = (state = INIT_MODE, action) => {
    switch (action.type) {
        case types.TOGGLE_ON_ADD:
            return {
                ...state,
                list: {
                    add: true,
                    edit: false
                }
            }
        case types.TOGGLE_ON_EDIT:
            return {
                ...state,
                list: {
                    add: false,
                    edit: true
                }
            }
        case types.RESET_MODE:
            return {
                ...state,
                list: {
                    add: false,
                    edit: false
                }
            }

        default:
            return state
    }
}

export default modesReducer;
