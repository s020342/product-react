import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './container/App';
import Store from 'store/store.js'

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));


