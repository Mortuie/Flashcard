import React, {Component} from 'react';


export default class ViewStack extends Component {

    render() {
        console.log(this.props.match.params.name);
        return (
            <div>
                xD
            </div>
        );
    }
}