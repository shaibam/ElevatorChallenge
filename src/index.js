import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducers from './reducers'

//const store = createStore(allReducers,{},applyMiddleware(thunk),window.devToolsExtension && window.devToolsExtension())
const store = createStore(allReducers,{},window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

