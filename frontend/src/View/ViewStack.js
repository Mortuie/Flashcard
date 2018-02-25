import React, {Component} from 'react';
import {connect} from 'react-redux';

class ViewStack extends Component {

    state = {
        name: '',
        stack: [],
    };

    getCurrentStack() {
        console.log(this.state.name);
        this.props.stacks.map(item => {
            if (item.name === this.state.name) {
                this.setState({stack: item.cards});
            }
        });
    }

    componentWillMount() {
        const stackName = this.props.match.params.name;
            this.setState({name: stackName}, this.getCurrentStack);
    }

    render() {
        return (
            <div>
                xD
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stacks: state.homepage.stacks,
    };
};

export default connect(mapStateToProps)(ViewStack);