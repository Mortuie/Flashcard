import React, {Component} from 'react';
import katex from 'katex';
import styled from 'styled-components';

export default class Tex extends Component {

    render() {
        try {
            var str = katex.renderToString(this.props.data);
        } catch (err) {
            console.log(err);
        }
        return (
            <TexWrapper dangerouslySetInnerHTML={{__html: str}}></TexWrapper>
        );
    }
}

const TexWrapper = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
`;