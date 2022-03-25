import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';import PauseIcon from '@mui/icons-material/Pause';
function StartJob(props) {

    var ROSLIBR = window.ROSLIB;

    var ros = new ROSLIBR.Ros({
        url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
    });

    var job_publisher = new ROSLIBR.Topic({
        ros : ros,
        name : "/start_job",
        messageType : "painted/Job"
    });

    var state_publisher = new ROSLIBR.Topic({
        ros : ros,
        name : "/state",
        messageType : "painted/State"
    });

    var pause_message = new ROSLIBR.Message({
        as_state: 3
    })

    var resume_message = new ROSLIBR.Message({
        as_state: 2
    })

    const start_handler = (event) => {

        //data being sent to the robot: id and plan
        var job_message = new ROSLIBR.Message({
            job_id : props.job,
            job_data : props.data.geoJSON
        })

        job_publisher.publish(job_message)
        console.log(job_message)
    }

    const pause_handler = (event) => {
        state_publisher.publish(pause_message)
        console.log(pause_message)
    }
    const resume_handler = (event) => {
        state_publisher.publish(resume_message)
        console.log(resume_message)
    }

    var disabled = (props.state === 1 || props.state === 5 ||  props.job === '') //can't start if not ready


    if (props.state == 0 || props.state === 5) { //waiting
        return (
            <Button variant="contained" onClick={start_handler} color={'success'} startIcon={<PlayCircleOutlineIcon/>} disabled={disabled} component="span"  fullWidth>
              Begin
            </Button>
        ); 
    } else if (props.state == 2 || props.state == 1) { //running
        return (
            <Button variant="contained" onClick={pause_handler} color={'warning'} startIcon={<PauseCircleIcon/>} disabled={disabled} component="span"  fullWidth>
              Pause
            </Button>
        ); 
    } else if (props.state == 3) { //paused
        return (
            <Button variant="contained" onClick={resume_handler} color={'success'} startIcon={<PlayCircleOutlineIcon/>} disabled={disabled} component="span"  fullWidth>
              Resume
            </Button>
        ); 
    }}
export default StartJob;