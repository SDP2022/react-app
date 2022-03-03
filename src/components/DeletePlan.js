import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

function DeletePlan(props) {

    const [select, setSelect] = useState();

    const handler = (event) => {
      console.log("delete",props.job)
      fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs/'+props.job+'.json'
      , { method: 'DELETE' })
      .then(() => {
        props.setJob("")
            })

    }

    const disabled = (props.job === '') //hacky temp solution
    const text = (props.job === '') ? "DELETE JOB (awaiting upload)" : "DELETE JOB"

    const Input = styled('input')({
      display: 'none',
    });



    return (
        <Button variant="contained" onClick={handler} color={'error'} disabled={disabled} component="span" startIcon={<DeleteIcon />} fullWidth>
          {text}
        </Button>
    );
}
export default DeletePlan;