import React, {Component} from 'react';
import Routes from './Routes/Routes';
import {Navbar} from './Navbar';

export default class Entrypoint extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes />
            </div>
        );
    }
}