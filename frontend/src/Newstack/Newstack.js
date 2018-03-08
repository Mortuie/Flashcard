import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import styled, {css} from 'styled-components';
import KatexComponent from 'react-katex-component';

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

    saveStack = () => {
        var cards = this.state.newStack;

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
    }

    render() {
        console.log(this.props);
        return (
            <Wrapper>
                <TopBar>
                    <div>Name: </div> 
                    <Input placeholder='name' onChange={e => this.setState({stackName: e.target.value})} value={this.state.stackName}></Input>
                    <button onClick={this.saveStack}>Save stack</button>
                </TopBar>

                <CardComponent>
                    <Title>Front Card:</Title>
                    <InputDisplay>
                        <Input  cards placeholder='front' onChange={e => this.setState({frontText: e.target.value})} value={this.state.frontText} />
                        <KatexComponent data={this.state.frontText} />
                    </InputDisplay>
                </CardComponent>

                <CardComponent>
                    <Title>Back Card:</Title>
                    <InputDisplay>
                        <Input cards placeholder='back' onChange={e => this.setState({backText: e.target.value})} value={this.state.backText}></Input>
                        <KatexComponent data={this.state.backText} />
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
