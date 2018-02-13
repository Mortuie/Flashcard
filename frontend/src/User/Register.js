import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            cpassword: '',
        };
    }
            

    register = () => {
        const {email, username, password, cpassword} = this.state;

        if (!email || !username || !password || !cpassword) {
            alert("One field missing");
        } else if (password !== cpassword) {
            alert("Passwords don't match");
        } else {
            // send http post request -> /api/auth/regsiter username email password
            axios.post('/api/auth/register', {
                username,
                email,
                password,
            }).then((res) => {
                console.log(res);
            });
        }
    }

    render() {
        return (
            <div className={css(styles.container)}>
                <input 
                    placeholder="example@email.com" 
                    onChange={e => this.setState({email: e.target.value})}
                    value={this.state.email}
                ></input>
                <input
                    placeholder='username'
                    onChange={e => this.setState({username: e.target.value})}
                    value={this.state.username}
                ></input>
                <input
                    type="password"
                    placeholder="password"
                    onChange={e => this.setState({password: e.target.value})}
                    value={this.state.password}
                ></input>
                <input
                    type='password'
                    placeholder='retype password'
                    onChange={e => this.setState({cpassword: e.target.value})}
                    value={this.state.cpassword}
                ></input>
                <button
                    onClick={this.register}
                >Register</button>
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
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '85%',
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 20,
        border: 'none',
        textAlign: 'center',
        backgroundColor: '#979aa0',
        borderRadius: 10,
        marginTop: 5,
    },  
    button: {
        borderRadius: 10,
        width: 100,
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'black',

    }
});