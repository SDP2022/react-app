import { useState } from 'react';
import { Joystick } from 'react-joystick-component';


function Controller(props) {

    const test = (event) => {
        console.log(event)
    }
    return (
        <Joystick size={100} move={test} > </Joystick>
    )
}
export default Controller;