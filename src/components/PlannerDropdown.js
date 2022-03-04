import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown' 
import {FormControl, InputLabel, Menu, Select, Box} from '@mui/material'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//state is passed in from parent.
export default function PlannerDropdown(props) {

  const handleChange = (event) => {
    props.setJob(event.target.value);
  };


  return (
    <Box>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Find Project</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={props.job}
    label="Find Project"
    onChange={handleChange}
  >
    <MenuItem value=''><em>Create new project</em></MenuItem>

    {/* go through key,values of JSON object of details to do output */}
    {Object.entries(props.plans).map((test) => 
    {
      return (
        <MenuItem value={test[0]}>Project with ID: {test[0]}, uploaded on: {test[1]['date-uploaded']}</MenuItem>
      )
    })}
  </Select>
</FormControl>
</Box>
  )
}