import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import {connect} from 'react-redux';
import {login} from './actions';
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: ''
    };


    login = () => {
        const {username, password} = this.state;

        if (!username || !password) {
            alert('One field missing');
        } else {
            axios.post('/api/auth/login', {
                username,
                password,
            }).then((res) => {
                console.log(res);
                this.props.login(res.data.token, res.data.username);
            });
        }
    }

    render() {
        return (
            <div className={css(styles.container)}>
                <input 
                    placeholder="example@email.com" 
                    onChange={e => this.setState({username: e.target.value})}
                    value={this.state.username}
                >
                </input>
                <input
                    type="password"
                    placeholder="*****"
                    onChange={e => this.setState({password: e.target.value})}
                    value={this.state.password}
                >
                </input>
                <button
                    onClick={this.login}
                >Sign in
                </button>
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (token, username) => dispatch(login(token, username)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);