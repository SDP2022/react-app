import { useState } from 'react';
import { Joystick } from 'react-joystick-component';


function Controller(props) {

    var ROSLIBR = window.ROSLIB;


    var ros = new ROSLIBR.Ros({
        url: 'ws://martinmillers.inf.ed.ac.uk:9090'
    });

    var move_publisher = new ROSLIBR.Topic({
        ros : ros,
        name : "/cmd_vel",
        messageType : 'geometry_msgs/Twist'
    });

    var move = function(linear, angular) {
        var twist = new ROSLIBR.Message({
            linear: {
                x: linear,
                y: 0,
                z: 0
            },
            angular: {
                x: 0,
                y: 0,
                z: angular
            }
        });
        move_publisher.publish(twist)
    }


    const test = (event) => {
        console.log(event)
        move((event.y/50)*0.22, (-event.x/50)*2.84 )


    }
    return (
        <Joystick size={100} move={test} stickColor={"#1A76D2"} > </Joystick>
    )
}
export default Controller;