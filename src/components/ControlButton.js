import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';


function ControlButton(props) {
    var ROSLIBR = window.ROSLIB;

    var ros = new ROSLIBR.Ros({
        url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
    });
    
    var state_publisher = new ROSLIBR.Topic({
        ros : ros,
        name : "/state",
        messageType : "painted/State"
    });

    var pause_message = new ROSLIBR.Message({
        as_state: 4
    })

    const pause_handler = (event) => {
        state_publisher.publish(pause_message)
        console.log(pause_message)
    }


    //pause job before launching manual control
    const handler = (event) => {
        pause_handler()
        window.open('/ManualControl')
    }

    const disabled = (props.job === '') //hacky temp solution

    var text = "Take Control"

    return (
        <Button variant="contained" onClick={handler} color={'primary'} startIcon={<ControlCameraIcon/>} disabled={disabled} component="span"  fullWidth>
          {text}
        </Button>
    );
}
export default ControlButton;