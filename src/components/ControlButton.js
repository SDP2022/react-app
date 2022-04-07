import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';


function StartJob(props) {

    const handler = (event) => {
        // props.setStarted(false)
        window.open('/ManualControl')
    }

    const disabled = (props.job === '') //hacky temp solution

    var text = "Take Control"

    return (
        <Button variant="contained" onClick={handler} color={'primary'} startIcon={<ControlCameraIcon/>} disabled={disabled} component="span"  fullWidth>
          {text}
        </Button>
    );
}
export default StartJob;