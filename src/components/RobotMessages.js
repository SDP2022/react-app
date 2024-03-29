import * as React from 'react'
import {Alert} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

function RobotMessages(props) {

    const [severity, setSeverity] = useState("info")
    const [message, setMessage] = useState("Messages will appear here once available.");
    var ROSLIBR = window.ROSLIB;

    useEffect( () => {
        var ros = new ROSLIBR.Ros({
            url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
        });

        var chatter_listener = new ROSLIBR.Topic({
            ros : ros,
            name : "web_messages",
            messageType : 'std_msgs/String'
        });

        chatter_listener.subscribe(function(m) {
            
            const parsed = JSON.parse(m.data)

            //get JSON from websocket, parse and change state
            setSeverity(parsed['alert_type'])
            setMessage(parsed['message'])

        
        })

        ros.on('connection', function() {
            setSeverity("success")
            setMessage("A connection was established to the robot.")

            console.log('Connected to websocket server.');
        });
        
        ros.on('error', function(error) {
            setSeverity("error")
            setMessage("A connection to the robot could not be established.")
            console.log('Error connecting to websocket server: ', error);
        });

    },[])
 

   // const text = "Messages will go here"
   // const sesrverity = "info";

    return (
        <Alert severity={severity} component="span">
          {message}
        </Alert>
    );

}
export default RobotMessages;
