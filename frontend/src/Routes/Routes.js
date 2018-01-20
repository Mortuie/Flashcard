import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Dummy} from '../Dummy';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dummy} />
                <Route path="/login" component={Dummy} />
                <Route path="/register" component={Dummy} />
                <Route path="/forgot" component={Dummy} />
            </Switch>
        );
    }
}