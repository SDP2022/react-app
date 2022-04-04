import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Pen(props) {

  const iconName = props.kind === 'up' ? 'ArrowDropUpIcon' : 'ArrowDropDownIcon';
  const text = props.kind === 'up' ? 'Pen up' : 'Pen down';
  const action = props.kind === 'down';

    var ROSLIBR = window.ROSLIB;

    var ros = new ROSLIBR.Ros({
        url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
    });

    var pen_client = new ROSLIBR.Service({
      ros: ros,
      name: '/pen_service',
      serviceType: 'PenCommand'
    })

    var request = new ROSLIBR.ServiceRequest({
      pen_down : action
    })

    const handler = (event) => {
      console.log(request)
      pen_client.callService(request, function(result) {
        console.log(result.status)
      })
    }





    return (
        <Button onClick={handler} variant="contained"  startIcon={props.kind === 'up' ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>} component="span">
          {text}
        </Button>
    );
}
export default Pen;