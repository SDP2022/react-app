import {Alert} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import {Subscriber, RosConnect, useMsg} from 'roslib-reactjs'

function RobotMessages(props) {

    // return (
    //     <RosConnect
    //         url="ws://localhost:9090"
    //         autoconnect
    //         timeout={1000}>

    //             <Subscriber
    //                 name="/chatter"
    //                 type="std_msgs/String"
    //                 rate={10.0}
    //                 queue_size={10}>
    //                     <Alert severity={"info"} component="span" fullWidth>
    //                         {console.log(useMsg())}
    //                     </Alert>

    //             </Subscriber>
    //     </RosConnect>

    // )

    // const handler = (event) => {
    // }

    const text = "Messages will go here"
    const serverity = "info";

    return (
        <Alert severity={serverity} component="span" fullWidth>
          {text}
        </Alert>
    );

    // var ros = new ROSLIB.Ros({
    //     url : 'ws://localhost:9090'
    //   });

    // var txt_listener = new ROSLIB.Topic({
    // ros : ros,
    // name : 'talker',
    // messageType : 'std_msgs/String'
    // });

    // txt_listener.subscribe(function(m) {
    //     console.log(m.data)
    // });

}
export default RobotMessages;