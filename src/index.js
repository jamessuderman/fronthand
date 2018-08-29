import React from 'react';
import ReactDOM from 'react-dom';
import Router from './hoc/Router/Router';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
