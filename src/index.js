import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './hoc/AppRouter/AppRouter';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
