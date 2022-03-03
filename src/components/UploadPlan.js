import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function UploadPlan(props) {

    const [select, setSelect] = useState();

    //take uploaded file and read as text then send to firebase
    const handler = (event) => {
      const fileReader = new FileReader();
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = e => {
        console.log(e.target.result)
        console.log((new Date()).toISOString().split('T')[0])

        const job_json = {
          'completed' : 'false',
          'date-uploaded' : "2023-06-09",
          'geoJSON' : (e.target.result)
        }

        if ((props.job) == "") { //new upload

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(job_json)
          };
          fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs.json', requestOptions)
              .then(response => response.json())
              .then(data => props.setJob(data.name));
        
        
        } else {
          const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(job_json)
          };
          fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs/'+ props.job +'.json', requestOptions)
        }
      }
    }

    const color = (props.job === '') ? "primary" : "warning" //hacky temp solution
    const text = (props.job === '') ? "Upload plan file" : "Reupload plan file"

    const Input = styled('input')({
      display: 'none',
    });


    return (
      <label htmlFor="contained-button-file">

        <Button variant="contained" color={color} component="span" startIcon={<UploadFileIcon />} fullWidth>
          {text}
        </Button>
        <Input id="contained-button-file" type="file" onChange={handler} />


      </label>

    );
}
export default UploadPlan;