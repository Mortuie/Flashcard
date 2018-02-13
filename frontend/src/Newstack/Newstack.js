import React, {Component} from 'react';
import Text from './Text';

export default class Newstack extends Component {

    state = {
        frontText: '',
        backText: '',
        newStack: [],
    };
    
    addCard = () => {
        this.state.newStack.push([this.state.frontText, this.state.backText]);
        this.setState({frontText: '', backText: ''});
    }

    render() {
        console.log("nstack", this.state.newStack);
        return (
            <div>
                <input placeholder='front' onChange={e => this.setState({frontText: e.target.value})}></input>
                <div>FRONT OUTPUT</div>
                <Text data={this.state.frontText} />
                <input placeholder='back' onChange={e => this.setState({backText: e.target.value})}></input>
                <div>BACK OUTPUT</div>
                <Text data={this.state.backText} />
                <button onClick={this.addCard}>Next card</button>
                <button>Save stack</button>
            </div>
        );
    }
}
