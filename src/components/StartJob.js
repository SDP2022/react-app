import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
function StartJob(props) {

    const handler = (event) => {
    }

    const disabled = (props.job === '') //hacky temp solution

    var text = "Begin"




    return (
        <Button variant="contained" onClick={handler} color={'success'} startIcon={<PlayCircleOutlineIcon/>} disabled={disabled} component="span"  fullWidth>
          {text}
        </Button>
    );
}
export default StartJob;