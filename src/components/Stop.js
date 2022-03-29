import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import DangerousIcon from '@mui/icons-material/Dangerous';
function Stop(props) {

  var ROSLIBR = window.ROSLIB;

  var ros = new ROSLIBR.Ros({
      url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
  });

  var warning_client = new ROSLIBR.Service({
    ros: ros,
    name: '/buzzer_service',
    serviceType: 'BuzzerCommand'
  })

  var request = new ROSLIBR.ServiceRequest({
    beep : 1
  })

  const handler = (event) => {

    warning_client.callService(request, function(result) {
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