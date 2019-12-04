import { combineReducers } from 'redux';
import tasksReducer from './store/tasks';
import tasksEditReducer from './store/tasksEdit';
import modesReducer from './store/modes';

const mainReducer = combineReducers({
    tasks: tasksReducer,
    tasksEdit: tasksEditReducer,
    modes: modesReducer
});

export default mainReducer;
