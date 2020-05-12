// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
    inputPassword= ()=> console.log('Entering password...')

    render(){
        return(
        <input type="password"
        onKeyUp={this.inputPassword} />
        )
    }
}

export default Keypad