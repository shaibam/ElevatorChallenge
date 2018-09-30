import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CallerReducer from './reducers/CallerReducer';
import UsersReducer from './reducers/UsersReducer';

const allReducers = combineReducers({
    caller: CallerReducer,
    user:UsersReducer
})

const store = createStore(allReducers,{caller:0,user:'a'},window.devToolsExtension && window.devToolsExtension())
/*,
    { caller: 0 },
    window.devToolsExtension && window.devToolsExtension());
*/
console.log('store', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
