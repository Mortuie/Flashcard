import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import styled, {css} from 'styled-components';
//import {KatexComponent} from 'react-katex-component';

class Newstack extends Component {

    state = {
        stackName: '',
        frontText: '',
        backText: '',
        errorMessage: '',
        newStack: [],
    };

    addCard = () => {
        if (this.state.frontText && this.state.backText) {
            this.state.newStack.push([this.state.frontText, this.state.backText]);
            this.setState({frontText: '', backText: ''});
        }
    }

    saveStack = () => {
        var cards = this.state.newStack;

        if (this.state.stackName) {
            axios.post('api/stack/newstack', {
                name: this.state.stackName,
                cards,
                username: this.props.username,
            }, {
                headers: {
                    'x-access-token': this.props.token,
                }})
            .then(res => {
                console.log(res);
                this.props.history.push("/stacks");
            })
            .catch(err => console.log(err));
        } else {
            this.setState({errorMessage: 'No name set'});
        }
    }

    render() {
        //<KatexComponent data={this.state.frontText} />
        return (
            <Wrapper>
                <TopBar>
                    <Input name placeholder='Name of Stack' onChange={e => this.setState({stackName: e.target.value})} value={this.state.stackName}></Input>
                    <SaveButton onClick={this.saveStack}>Save stack</SaveButton>
                    <div>{this.state.errorMessage}</div>
                </TopBar>

                <CardComponent>
                    <Title>Front Card:</Title>
                    <InputDisplay>
                        <Input  cards placeholder='front' onChange={e => this.setState({frontText: e.target.value})} value={this.state.frontText} />
                    </InputDisplay>
                </CardComponent>

                <CardComponent>
                    <Title>Back Card:</Title>
                    <InputDisplay>
                        <Input cards placeholder='back' onChange={e => this.setState({backText: e.target.value})} value={this.state.backText}></Input>
                    </InputDisplay>
                </CardComponent>

                <Center>
                    <button onClick={this.addCard}>Next card</button>
                </Center>
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
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
`;

const Input = styled.textarea`
    font-size: 15px;
    resize: none;
    border: none;

    ${props => props.cards && css`
        height: 320px;
        width: 320px;

    `}

    ${props => props.name && css `
        font-size: 23px;
        height: 25px;
        width: 300px;
    `}
`;

const SaveButton = styled.button`
    border: none;
    height: 25px;
    width: 150px;
    font-size: 23px;
    background-color: #f44242;
    color: white;
`;

const Title = styled.div`
    font-size: 20px;

`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
