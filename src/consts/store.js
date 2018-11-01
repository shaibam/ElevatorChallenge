import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers';
import Timer from './timer';
new Timer();
const Store = createStore(allReducers, {}, window.devToolsExtension && window.devToolsExtension());
export { Store }