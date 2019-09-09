import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import combineReducers from './reducers/index';
import reduxThunk from 'redux-thunk';
import './index.scss';
import '../node_modules/bulma/css/bulma.css';

const store = createStore(
    combineReducers, //TODOS LOS REDUCERS
    {}, //ESTADO INICIAL
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
