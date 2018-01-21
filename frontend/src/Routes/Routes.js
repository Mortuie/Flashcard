import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Dummy} from '../Dummy';
import {Login, Register, Forgot} from '../User';
import {Homepage} from '../Homepage';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
            </Switch>
        );
    }
}