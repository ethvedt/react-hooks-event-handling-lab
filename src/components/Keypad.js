// Code Keypad Component Here
import React from 'react';

function Keypad (){
    return (
        <div className="container">
            <input type="password" onChange={handleChange}>

            </input>
        </div>
    )
}

function handleChange(event) {
    console.log('Entering password...')
};

export default Keypad;