import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

export default class Navbar extends Component {
    render() {
        return (
            <div className={css(styles.background)}>

            </div>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
    },
});
