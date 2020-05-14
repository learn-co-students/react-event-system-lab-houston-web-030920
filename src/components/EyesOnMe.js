// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

    constructor(){
        super()
        this.state = {
            test: "EyesOnMe test"
        }
    }

    blurEvent = () => {
        console.log("Hey! Eyes on me!")
    }
    render(){
        return (
            <button 
                onFocus={() => console.log("Good!")}
                onBlur={this.blurEvent}>
            </button>
        )
    }
}