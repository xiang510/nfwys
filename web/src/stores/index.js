import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer  from '../reducers';

// const reducers = combineReducers({ commonData, });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;