import { createStore, combineReducers} from 'redux';
import anecdoteReducer from './reducers/anecdoteReducer';

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer);

export default store;