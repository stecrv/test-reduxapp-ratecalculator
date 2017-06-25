import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';

import reducers from './reducers/index';
const middleware =applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
