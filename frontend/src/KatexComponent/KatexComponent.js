import React, {Component} from 'react';
import katex from 'katex';
import styled from 'styled-components';

export default class KatexComponent extends Component {
    render() {

        try {
            var str = katex.renderToString(this.props.data);
        } catch (err) {
            console.log(err);
        }
        return <Wrapper dangerouslySetInnerHTML={{__html: str}}></Wrapper>;
    }
}


const Wrapper = styled.span`
    width: 300px;
    height: 300px;
    overflow: auto;
    border: 1px solid black;
    padding: 10px;
`;
