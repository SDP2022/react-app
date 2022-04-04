import { useState, useEffect } from 'react';
import CameraInternal from '../components/CameraInternal';


function Camera(props) {

    const [img, setImg] = useState("https://cataas.com/cat/says/Still%20connecting%20to%20the%20PaintBOT%20live%20feed%20%0A%20%20Enjoy%20this%20random%20cat%20in%20the%20meantime%0A%20Refresh%20to%20try%20again?color=turquoise")

    //only show animations when loading
    var spinner = true;
    var transition = true;

    //load connection and subscribe to images only once
    useEffect(() => {
        console.log("NEEEW")
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
        transition = false;
        spinner = false;
    },[])

    return (
        <CameraInternal
        img={img}
        spinner = {spinner}
        transition = {transition}>

        </CameraInternal>
    );
}
export default Camera;