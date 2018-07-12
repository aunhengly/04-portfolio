import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styles/reset.css';
import 'styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
