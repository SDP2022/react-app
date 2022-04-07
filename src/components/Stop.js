import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import DangerousIcon from '@mui/icons-material/Dangerous';
function Stop(props) {

  var ROSLIBR = window.ROSLIB;

  var ros = new ROSLIBR.Ros({
      url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
  });

  var buzzer_client = new ROSLIBR.Service({
    ros: ros,
    name: '/buzzer_service',
    serviceType: 'BuzzerCommand'
  })

  var buzzer_request = new ROSLIBR.ServiceRequest({
    beep : 1
  })

  var led_client = new ROSLIBR.Service({
    ros: ros,
    name: '/led_service',
    serviceType: 'LEDCommand'
  })

  var led_request = new ROSLIBR.ServiceRequest({
    led : "red"
  })

  const handler = (event) => {

    buzzer_client.callService(buzzer_request, function(result) {
      console.log(result.status)
    })

    led_client.callService(led_request, function(result) {
      console.log(result.status)
    })
  }




    return (
        <Button onClick={handler} variant="contained" color='error' startIcon={<DangerousIcon/>} component="span">
          Emergency Warning
        </Button>
    );
}
export default Stop;