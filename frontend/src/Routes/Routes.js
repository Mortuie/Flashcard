import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {Dummy} from '../Dummy';
import {Login, Register, Forgot} from '../User';
import {Homepage} from '../Homepage';
import {connect} from 'react-redux';
import {Newstack} from '../Newstack';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dummy} />
                <Authroute path='/stacks' component={Homepage} redirect={'/'} loggedIn={this.props.user} />
                <Authroute path='/newstack' component={Newstack} redirect={'/'} loggedIn={this.props.user} />
                <NonAuthroute path="/login" component={Login} redirect={'/stacks'} loggedIn={this.props.user} />
                <NonAuthroute path="/register" component={Register} redirect={'/stacks'} loggedIn={this.props.user} />
                <NonAuthroute path="/forgot" component={Forgot} redirect={'/stacks'} loggedIn={this.props.user} />
                <Route path='*' component={Dummy} />
            </Switch>
        );
    }
}

const Authroute = ({loggedIn, component: Component, redirect: path, ...rest}) => (
    <Route {...rest} render={props => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: path}} />
        ))} 
    />
);

const NonAuthroute = ({loggedIn, component: Component, redirect: path, ...rest}) => (
    <Route {...rest} render={props => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: path}} />
        ))} 
    />
);

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({type: 'LOGIN'}),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));