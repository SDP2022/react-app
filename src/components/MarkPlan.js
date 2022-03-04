import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ToggleButton} from '@mui/material';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';

function MarkPlan(props) {

    const handler = (event) => {

        const mark_json = {
            'completed' : !(props.data['completed'])
            }

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mark_json)
        };

        fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs/' + props.job + '.json', requestOptions)
            .then(response => response.json())
            .then(props.setCompleted(!(props.completedChange)))
    }

    const disabled = (props.job === '') //hacky temp solution

    var text = "Mark Completed";
    if (!(disabled)) {
        text = ((props.data['completed']) === false) ? "Mark Completed" : "Mark Uncompleted";
    }




    return (
        <Button variant="contained" onClick={handler} color={'secondary'} startIcon={<DoneIcon/>} disabled={disabled} component="span"  fullWidth>
          {text}
        </Button>
    );
}
export default MarkPlan;