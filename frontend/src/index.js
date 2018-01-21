import React from 'react';
import ReactDOM from 'react-dom';
import Entrypoint from './Entrypoint';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './Redux';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Entrypoint />
        </Router>
    </Provider>,
    document.getElementById('root')
);
