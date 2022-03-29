import { useState } from 'react';
import Image from 'material-ui-image'

function Camera(props) {

    const [img, setImg] = useState("https://cataas.com/cat")

    var ROSLIBR = window.ROSLIB;

    var ros = new ROSLIBR.Ros({
      url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
    });

    var camera_listener = new ROSLIBR.Topic({
        ros : ros,
        name : "/camera/image/compressed",
        messageType : 'sensor_msgs/CompressedImage'
    });

    camera_listener.subscribe(function(message) {
        setImg("data:image/jpeg;base64," + message.data);
    })




    return (
        <Image
        src={img}
        />
    );
}
export default Camera;