import React, {Component} from 'react';
import katex from 'katex';
import styled, {css} from 'styled-components';

export default class Tex extends Component {

    render() {
        try {
            var str = katex.renderToString(this.props.data);
            console.log(str);
        } catch (err) {
            console.log(err);
        }
        return (
            <Wrapper>
                <TexWrapper dangerouslySetInnerHTML={{__html: str}}></TexWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    width: 300px;
    height: 300px;

`;

const TexWrapper = styled.span`
    width: 300px;
    height: 300px;
    overflow: auto;
    


    ${props => props.view && css`
        width: 400px;
        height: 300px;
    `}
`;