import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
function StartJob(props) {

    var ROSLIBR = window.ROSLIB;

    var ros = new ROSLIBR.Ros({
        url: 'ws://localhost:9090'
    });

    var job_publisher = new ROSLIBR.Topic({
        ros : ros,
        name : "/start_job",
        messageType : 'std_msgs/String'
    });

    var job_message = new ROSLIBR.Message({data : JSON.stringify(props.data)})

    const handler = (event) => {
        job_publisher.publish(job_message)
        console.log(job_message)
    }

    const disabled = (props.job === '') //hacky temp solution

    var text = "Begin"




    return (
        <Button variant="contained" onClick={handler} color={'success'} startIcon={<PlayCircleOutlineIcon/>} disabled={disabled} component="span"  fullWidth>
          {text}
        </Button>
    );
}
export default StartJob;