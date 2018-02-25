import React, {Component} from 'react';
import Text from './Text';
import {connect} from 'react-redux';
import axios from 'axios';
import styled, {css} from 'styled-components';

class Newstack extends Component {

    state = {
        stackName: '',
        frontText: '',
        backText: '',
        newStack: [],
    };

    addCard = () => {
        if (this.state.frontText && this.state.backText) {
            this.state.newStack.push([this.state.frontText, this.state.backText]);
            this.setState({frontText: '', backText: ''});
        }
    }

    addStack = () => {
        var cards = this.state.newStack;

        axios.post('api/stack/newstack', {
            name: this.state.stackName,
            cards,
            username: this.props.username,
        }, {
            headers: {
                'x-access-token': this.props.token,
         }})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.props);
        return (
            <Wrapper>
                <TopBar>
                    <Input placeholder='name' onChange={e => this.setState({stackName: e.target.value})} value={this.state.stackName}></Input>
                    <button onClick={this.addStack}>Save stack</button>
                </TopBar>

                <CardComponent>
                    <Title>Front Card:</Title>
                    <InputDisplay>
                        <input placeholder='front' onChange={e => this.setState({frontText: e.target.value})} value={this.state.frontText}></input>
                        <Text data={this.state.frontText} />
                    </InputDisplay>
                </CardComponent>

                <CardComponent>
                    <Title>Back Card:</Title>
                    <InputDisplay>
                        <Input placeholder='back' onChange={e => this.setState({backText: e.target.value})} value={this.state.backText}></Input>
                        <Text data={this.state.backText} />
                    </InputDisplay>
                </CardComponent>

                <button onClick={this.addCard}>Next card</button>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
        username: state.user.username,
    };
}

export default connect(mapStateToProps)(Newstack);

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
`;

const TopBar = styled.div`
    width: 100%
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardComponent = styled.div`
    width: 100%;
    height: 200px;
    background-color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputDisplay = styled.div`
    display: flex;
    height: 100%;
`;

const Input = styled.input`
    height: 30px;
    font-size: 23px;
    border: none;
`;

const Title = styled.div`
    font-size: 20px;

`;
