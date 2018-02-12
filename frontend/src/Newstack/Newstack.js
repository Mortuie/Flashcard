import React, {Component} from 'react';
import Text from './Text';

export default class Newstack extends Component {

    state = {
        frontText: '',
        backText: '',
    };
    
    render() {
        return (
            <div>
                <input placeholder='front' onChange={e => this.setState({frontText: e.target.value})}></input>
                <div>FRONT OUTPUT</div>
                <input placeholder='back' onChange={e => this.setState({backText: e.target.value})}></input>
                <div>BACK OUTPUT</div>
                <Text data={this.state.backText} />
                <button>Next card</button>
                <button>Save stack</button>
            </div>
        );
    }
}
