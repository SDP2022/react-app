import * as React from 'react'
import {Alert} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

function RobotMessages(props) {

    const [severity, setSeverity] = useState("info")
    const [message, setMessage] = useState("Messages will appear here once connected");


    var ROSLIBR = window.ROSLIB;

    var ros = new ROSLIBR.Ros({
        url: 'ws://localhost:9090'
    });

    var chatter_listener = new ROSLIBR.Topic({
        ros : ros,
        name : "web_messages",
        messageType : 'std_msgs/String'
    });

    chatter_listener.subscribe(function(m) {
        
        const parsed = JSON.parse(m.data)
        console.log(parsed)


        //get JSON from websocket, parse and change state
        setSeverity(parsed['alert_type'])
        setMessage(parsed['message'])

    
    })

   // const text = "Messages will go here"
   // const sesrverity = "info";

    return (
        <Alert severity={severity} component="span" fullWidth>
          {message}
        </Alert>
    );

}
export default RobotMessages;
