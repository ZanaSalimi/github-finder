import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const middleWare = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare, logger)))

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>
, document.getElementById('root'));
