import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {populateStacks} from './actions';
import styled from 'styled-components';

class Homepage extends Component {

    componentWillMount() {

        const axiosConfig = {
            headers: {
                'x-access-token': this.props.token,
            }
        };

        axios.post('/api/stack/getstacks', {
            username: this.props.username,
        }, axiosConfig)
        .then(res => this.props.populateStacks(res.data));
    }

    render() {

        return (
            <Container>

                {this.props.stacks &&
                    this.props.stacks.map(item => (
                        <Card onClick={() => this.props.history.push("/view/" + item.name)} key={item.name}>
                            <div>{item.name}</div>
                        </Card>

                    ))
                }


            </Container>
        );
    }
}

const Card = styled.div`
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 1px solid black;

`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

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