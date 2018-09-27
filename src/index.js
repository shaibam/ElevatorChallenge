import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProductsReducer from './reducers/ProductsReducer';
import UsersReducer from './reducers/UsersReducer';

const allReducers = combineReducers({
    products: ProductsReducer,
    user: UsersReducer
})

const store = createStore(allReducers,
    { products: [{ name: 'iphone' }], user: 'Me' },
    window.devToolsExtension && window.devToolsExtension());


console.log(store.getState());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
