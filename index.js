import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import Card from './Card';
//import {robots} from './robots';
//import Cardlist from './Cardlist';
import App from './container/App';
import { searchRobots, requestRobots } from './reducer';

const rootReducer = combineReducers({searchRobots,requestRobots});
const logger = createLogger();
const store= createStore(rootReducer,applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<div className='tc'>
                <Provider store = {store}>
                    <App />
                </Provider>
                </div>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
