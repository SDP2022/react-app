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

  ///OLD METHOD
  
  // const [open, setOpen] = React.useState(false);
  // const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   } else if (event.key === 'Escape') {
  //     setOpen(false);
  //   }
  // }

  // // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  // return (
  //   <Stack direction="row" spacing={2}>

  //     <div>
  //       <Button
  //         variant="contained"
  //         ref={anchorRef}
  //         id="composition-button"
  //         aria-controls={open ? 'composition-menu' : undefined}
  //         aria-expanded={open ? 'true' : undefined}
  //         aria-haspopup="true"
  //         onClick={handleToggle}
  //         endIcon={<KeyboardArrowDownIcon />}

  //       >
  //         Project Plans
  //       </Button>
  //       <Popper
  //         open={open}
  //         anchorEl={anchorRef.current}
  //         role={undefined}
  //         placement="bottom-start"
  //         transition
  //         disablePortal
  //       >
  //         {({ TransitionProps, placement }) => (
  //           <Grow
  //             {...TransitionProps}
  //             style={{
  //               transformOrigin:
  //                 placement === 'bottom-start' ? 'left top' : 'left bottom',
  //             }}
  //           >
  //             <Paper>
  //               <ClickAwayListener onClickAway={handleClose}>
  //                 <MenuList
  //                   autoFocusItem={open}
  //                   id="composition-menu"
  //                   aria-labelledby="composition-button"
  //                   onKeyDown={handleListKeyDown}
  //                 >
  //                   {DUMMY_DATA.map((job) => {
  //                     return (<MenuItem>{"Job ID: " +job.id}</MenuItem>)
  //                   })}

  //                   {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
  //                 </MenuList>
  //               </ClickAwayListener>
  //             </Paper>
  //           </Grow>
  //         )}
  //       </Popper>
  //     </div>
  //   </Stack>
  // );
}