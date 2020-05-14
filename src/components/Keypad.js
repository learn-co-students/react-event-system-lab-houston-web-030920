// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {

    constructor(){
        super()
        this.state = {
            test: "Keypad test"
        }
    }

    render(){
        return(
            <input type="password"
            onKeyUp={() => console.log("Entering password...")} />
        )
    }
}