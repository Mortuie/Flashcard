import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    login = () => {
        console.log(this.state.username);
    }

    render() {
        return (
            <div className={css(styles.container)}>
                <input placeholder="example@email.com" onChange={e => this.setState({username: e.target.value})} value={this.state.username}></input>
                <input type="password" placeholder="*****" onChange={e => this.setState({password: e.target.value})} value={this.state.password}></input>
                <button onClick={this.login}>Sign in</button>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        marginTop: 150,
        height: 200,
        width: 300,
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
    },
});