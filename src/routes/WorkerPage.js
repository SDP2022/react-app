import * as React from 'react';
import { Stack, Typography, Button,  } from "@mui/material";
import PlannerDropdown from "../components/PlannerDropdown";
import PreviewPlan from '../components/PreviewPlan';
import RobotMessages from '../components/RobotMessages';
import MarkPlan from '../components/MarkPlan';
import ControlButton from '../components/ControlButton';
import StartJob from '../components/StartJob';
import Camera from '../components/Camera';



function Worker(props) {

//lifted state up so it can be accessed by other elements on page
const [job, setJob] = React.useState('');
const [completedChange, setCompleted] = React.useState(false);
const [jobs, setJobs] = React.useState([]);
//const [started, setStarted] = React.useState(false);
//initial state is waiting
const [state, setState] = React.useState(0);

//todo move socket up here

 var ROSLIBR = window.ROSLIB;

 var ros = new ROSLIBR.Ros({
  url: process.env.REACT_APP_ROSBRIDGE_HOSTNAME
});


var state_client = new ROSLIBR.Service({
  ros: ros,
  name: '/job_status_service',
  serviceType: 'JobStatusCommand'
})

var request = new ROSLIBR.ServiceRequest({
  status : true
})


var state_listener = new ROSLIBR.Topic({
  ros : ros,
  name : "state",
  messageType : 'painted/State'
});

state_listener.subscribe(function(result) {
  setState(result.as_state)
})


//fetches job data from firebase
React.useEffect(() => {
  fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
    .then(results => results.json())
    .then(data => {
      const yeet = data;
      setJobs(yeet)
    });
  }, [job,completedChange]); 


//gets state
React.useEffect(() => {
  state_client.callService(request, function(result) {
    if (result.job_id !== "-1") {
      setJob(result.job_id)
    }
    setState(result.status)
    console.log(result.status)
    console.log(result.job_id)

    })
})

    return (

    <div>
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        sx={{ pt: 5, pb: 2 }}
        gutterBottom
      >
        PaintED - For Workers
      </Typography>

      <Stack justifyContent="center" spacing={2}>
        <PlannerDropdown plans={jobs} setJob={setJob} job={job}/>

        <RobotMessages/>

        <Stack direction="row" spacing={2}>
          <PreviewPlan job={job} data={jobs[job]}/>
          <MarkPlan job={job} completedChange={completedChange} setCompleted={setCompleted} data={jobs[job]}/>
        </Stack>

        <Stack direction="row" spacing={2}>
          <ControlButton state={state} job={job}/>
          <StartJob job={job} state={state} data={jobs[job]}/>
        </Stack>

        <Camera></Camera>
      </Stack>
    </div>
  );
}
export default Worker;
