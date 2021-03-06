import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from "./_enter/Root";
import { configureStore } from "./store/configureStore";
import './index.css';
import * as serviceWorker from './serviceWorker';

const { store, persistor } = configureStore();

ReactDOM.render(<Root store={store} persistor={persistor} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
