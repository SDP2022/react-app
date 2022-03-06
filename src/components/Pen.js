import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Pen(props) {

    // var ROSLIBR = window.ROSLIB;

    // var ros = new ROSLIBR.Ros({
    //     url: 'ws://localhost:9090'
    // });

    // var job_publisher = new ROSLIBR.Topic({
    //     ros : ros,
    //     name : "/start_job",
    //     messageType : 'std_msgs/String'
    // });

    // var job_message = new ROSLIBR.Message({data : JSON.stringify(props.data)})

    // const handler = (event) => {
    //     job_publisher.publish(job_message)
    //     console.log(job_message)
    // }

    const iconName = props.kind === 'up' ? 'ArrowDropUpIcon' : 'ArrowDropDownIcon';
    const text = props.kind === 'up' ? 'Pen up' : 'Pen down';



    return (
        <Button variant="contained"  startIcon={props.kind === 'up' ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>} component="span">
          {text}
        </Button>
    );
}
export default Pen;