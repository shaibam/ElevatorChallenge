import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CallerReducer from './reducers/CallerReducer';

const allReducers = combineReducers({
    caller: CallerReducer
})

const store = createStore(allReducers,{},window.devToolsExtension && window.devToolsExtension())
/*,
    { caller: 0 },
    window.devToolsExtension && window.devToolsExtension());
*/
console.log('store', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
