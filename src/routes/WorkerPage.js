import * as React from 'react';
import { Stack, Typography, Button,  } from "@mui/material";
import PlannerDropdown from "../components/PlannerDropdown";
import PreviewPlan from '../components/PreviewPlan';
import RobotMessages from '../components/RobotMessages';
import MarkPlan from '../components/MarkPlan';
import ControlButton from '../components/ControlButton';
import StartJob from '../components/StartJob';


function Worker(props) {

//lifted state up so it can be accessed by other elements on page
const [job, setJob] = React.useState('');
const [completedChange, setCompleted] = React.useState(false);
const [jobs, setJobs] = React.useState([]);
const [started, setStarted] = React.useState(false);

//todo move socket up here

 var ROSLIBR = window.ROSLIB;


React.useEffect(() => {
  fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
    .then(results => results.json())
    .then(data => {
      const yeet = data;
      setJobs(yeet)
    });
  }, [job,completedChange]); 


    
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
          <ControlButton started={started} setStarted={setStarted} job={job}/>
          <StartJob job={job} started={started} setStarted={setStarted} data={jobs[job]}/>
        </Stack>

      </Stack>
    </div>
  );
}
export default Worker;
