import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../User/actions';

class Navbar extends Component {

    getBar = () => {
        if (this.props.user) { // logged in...
            return (
                <ul className={css(styles.background)}>
                    <li className={css(styles.title)}><Link className={css(styles.items)} to='/'>Flashcards</Link></li>
                    <li className={css(styles.nav)}><Link onClick={this.props.logout} className={css(styles.items)} to='/'>Logout</Link></li>
                    <li className={css(styles.nav)}><Link className={css(styles.items)} to='/newstack'>New Stack</Link></li>
                </ul>
            );
        } else { // logged in....
            return (
                <ul className={css(styles.background)}>
                    <li className={css(styles.title)}><Link className={css(styles.items)} to='/'>Flashcards</Link></li>
                    <li className={css(styles.nav)}><Link className={css(styles.items)} to='/login'>Login</Link></li>
                    <li className={css(styles.nav)}><Link className={css(styles.items)} to='/register'>Register</Link></li>
                </ul>
            );
        }
    }

    render() {
        console.log(this.props);
        return this.getBar();
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f4ad42',
        width: '100%',
        height: 50,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        listStyleType: 'none',
    },
    items: {
        display: 'block',
        textAlign: 'center',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '16px 14px',
        textDecoration: 'none',
    },
    title: {
        float: 'left',
    },
    nav: {
        float: 'right',
    },
});

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);