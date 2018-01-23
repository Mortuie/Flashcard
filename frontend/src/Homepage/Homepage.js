import React, {Component} from 'react';
import {response} from '../Requests/FlashcardStacks';
import {css, StyleSheet} from 'aphrodite';


export default class Homepage extends Component {

    render() {
        console.log(response["stacks"]);
        response["stacks"].map(item => console.log(item.name));

        return (
            <div>
                
                {
                    response["stacks"].map(item => (
                        <div className={css(styles.container)}>
                            <div>{item.name}</div>
                            <div>{item.desc}</div>
                            <div>{item.cards}</div>
                        </div>

                    ))
                }
            
            
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        margin: 10,
        border: "1px solid black",
    },
});