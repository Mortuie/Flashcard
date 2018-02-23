import React, {Component} from 'react';
import Text from './Text';
import {connect} from 'react-redux';
import axios from 'axios';

class Newstack extends Component {

    state = {
        stackName: '',
        frontText: '',
        backText: '',
        newStack: [],
    };

    addCard = () => {
        this.state.newStack.push([this.state.frontText, this.state.backText]);
        this.setState({frontText: '', backText: ''});
    }

    addStack = () => {

        const axiosConfig = {
            headers: {
                'x-access-token': this.props.token,
        }};

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
            <div>
                <input placeholder='name' onChange={e => this.setState({stackName: e.target.value})} value={this.state.stackName}></input>
                <input placeholder='front' onChange={e => this.setState({frontText: e.target.value})} value={this.state.frontText}></input>
                <div>FRONT OUTPUT</div>
                <Text data={this.state.frontText} />
                <input placeholder='back' onChange={e => this.setState({backText: e.target.value})} value={this.state.backText}></input>
                <div>BACK OUTPUT</div>
                <Text data={this.state.backText} />
                <button onClick={this.addCard}>Next card</button>
                <button onClick={this.addStack}>Save stack</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
        username: state.user.username,
    };
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps)(Newstack);