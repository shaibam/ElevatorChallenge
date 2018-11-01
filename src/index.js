import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
//import allReducers from './reducers'
import {Store} from './consts/store';

//const store = createStore(allReducers,{},applyMiddleware(thunk),window.devToolsExtension && window.devToolsExtension())
//const store = createStore(allReducers,{},window.devToolsExtension && window.devToolsExtension())

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));


