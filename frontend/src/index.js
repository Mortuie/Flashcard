import React from 'react';
import ReactDOM from 'react-dom';
import Entrypoint from './Entrypoint';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Entrypoint />
    </Router>,
    document.getElementById('root')
);
