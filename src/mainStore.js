import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducers from './reducers';

const store = createStore(mainReducers, composeWithDevTools());

export default store;
