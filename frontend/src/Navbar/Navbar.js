import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    getBar = () => {
        if (true) {
            return (
                <ul className={css(styles.background)}>
                    <li className={css(styles.title)}><Link className={css(styles.items)} to='/'>Flashcards</Link></li>
                    <li className={css(styles.nav)}><Link className={css(styles.items)} to='/login'>Login</Link></li>
                    <li className={css(styles.nav)}><Link className={css(styles.items)} to='/register'>Register</Link></li>
                </ul>
            );
        } else { // logged in....

        }
    }

    render() {
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
