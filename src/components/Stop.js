import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import DangerousIcon from '@mui/icons-material/Dangerous';
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




    return (
        <Button variant="contained" color='error' startIcon={<DangerousIcon/>} component="span">
          Emergency Warning
        </Button>
    );
}
export default Pen;