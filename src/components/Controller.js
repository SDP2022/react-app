import { useState, useEffect } from 'react';
import { Joystick } from 'react-joystick-component';


function Controller(props) {

    const [move, setMove] = useState();

    useEffect( () => {
        var ROSLIBR = window.ROSLIB;

        var ros = new ROSLIBR.Ros({
            url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
        });
    
        var move_publisher = new ROSLIBR.Topic({
            ros : ros,
            name : "/cmd_vel",
            messageType : 'geometry_msgs/Twist'
        });
        
    
        setMove((linear, angular) => {
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
        })
    })

    const test = (event) => {
        move((event.y/50)*0.22, (-event.x/50)*2.84 )
    }

    return (
        <Joystick size={100} move={test} stickColor={"#1A76D2"} > </Joystick>
    )
}
export default Controller;