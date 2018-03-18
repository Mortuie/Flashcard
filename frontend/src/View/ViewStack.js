import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';
// import KatexComponent from 'react-katex-component';

class ViewStack extends Component {

    state = {
        name: '',
        stack: [],
        currentIndex: 0,
        front: true,
        view: '',
    };

    getCurrentStack() {
        console.log(this.state.name);
        this.props.stacks.map(item => {
            if (item.name === this.state.name) {
                console.log("cards", item.cards);
                this.setState({stack: item.cards});
            }
        });
    }

    componentWillMount() {
        const stackName = this.props.match.params.name;
        this.setState({name: stackName}, this.getCurrentStack);
    }

    newCard(change) {
        var newIndex = this.state.currentIndex + change;
        if (newIndex >= this.state.stack.length) newIndex = 0;
        else if (newIndex < 0) newIndex = this.state.stack.length - 1;

        this.setState({currentIndex: newIndex, front: true});
    }

    getCurrentView() {
        var cardIndex = this.state.currentIndex;
        var card = this.state.stack[cardIndex];
        if (card) {
            if (this.state.front) {
                return card[0];
            } else {
                return card[1];
            }
        }
    }

    flipCard() {
        this.setState({front: !this.state.front});
    }

    render() {
        console.log("state", this.state);
        var text = '';
        if (this.state.stack !== []) {
            var text = this.getCurrentView();
        }
        return (
            //<KatexComponent data={text}></KatexComponent>
            <Wrapper>
                <div>Stack name: {this.state.name}</div>
                <div>Current Card: {(this.state.currentIndex + 1) + "/" + this.state.stack.length}</div>

                <ButtonWrapper>
                    <Button onClick={() => this.newCard(-1)}>Previous</Button>
                    <Button onClick={() => this.flipCard()}>Flip Card</Button>
                    <Button onClick={() => this.newCard(1)}>Next</Button>
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 80%;
    height: 300px;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 75px;
    height: 25px;
`;

const CardWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    backgroundColor: white;
`;

const ButtonWrapper = styled.div`
    display: flex;

`;

const mapStateToProps = state => {
    return {
        stacks: state.homepage.stacks,
    };
};

export default connect(mapStateToProps)(ViewStack);