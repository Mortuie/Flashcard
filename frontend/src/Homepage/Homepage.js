import React, {Component} from 'react';
import {response} from '../Requests/FlashcardStacks';
import {css, StyleSheet} from 'aphrodite';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {populateStacks} from './actions';

class Homepage extends Component {

    state = {
        stacks: null,
    };

    componentWillMount() {

        const axiosConfig = {
            headers: {
                'x-access-token': this.props.token,
        }};

        axios.post('/api/stack/getstacks', {
            username: this.props.username,
        }, axiosConfig)
        .then(res => this.props.populateStacks(res.data));
    }

    render() {

        return (
            <div>

                {this.props.stacks &&
                    this.props.stacks.map(item => (
                        <div className={css(styles.container)} onClick={() => this.props.history.push("/view/" + item.name)} key={item.name}>
                            <div>{item.name}</div>
                        </div>

                    ))
                }


            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        margin: 10,
        border: "1px solid black",
    },
});

const mapStateToProps = state => {
    return {
        token: state.user.token,
        username: state.user.username,
        stacks: state.homepage.stacks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        populateStacks: (stacks) => dispatch(populateStacks(stacks)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);