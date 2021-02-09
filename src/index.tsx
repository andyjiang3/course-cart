import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './components/Router.jsx';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
