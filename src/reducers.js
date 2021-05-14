import { combineReducers } from 'redux';
import tasksReducer from './store/tasks';
import tasksManagementReducer from './store/tasksManagement';
import modesReducer from './store/modes';

const mainReducer = combineReducers({
    tasks: tasksReducer,
    tasksManagement: tasksManagementReducer,
    modes: modesReducer
});

export default mainReducer;
