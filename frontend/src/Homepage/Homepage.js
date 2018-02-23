import React, {Component} from 'react';
import {response} from '../Requests/FlashcardStacks';
import {css, StyleSheet} from 'aphrodite';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Homepage extends Component {

    state = {
        stacks: null,
    };

    componentWillMount() {

        const axiosConfig = {
            headers: {
                'x-access-token': this.props.token,
        }};

        const data = {
            username: this.props.username,
        };

        axios.post('/api/stack/getstacks', {
            username: this.props.username,
        }, axiosConfig)
        .then(res => this.setState({stacks: res.data}));
    }

    render() {
        console.log(this.state.stacks);

        return (
            <div>

                {this.state.stacks &&
                    this.state.stacks.map(item => (
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
    };
};

const mapDispatchToProps = dispatch => {
    return null;
};

export default connect(mapStateToProps)(Homepage);