import * as React from 'react';
import { Typography, Stack, Button } from "@mui/material";
import PlannerDropdown from "../components/PlannerDropdown";
import PreviewPlan from '../components/PreviewPlan';
import UploadPlan from '../components/UploadPlan';
import DeletePlan from '../components/DeletePlan';

function Planner(props) {


//lifted state up so it can be accessed by other elements on page
const [job, setJob] = React.useState('');

const [jobs, setJobs] = React.useState([]);

React.useEffect(() => {
  fetch('https://sdp2022-7afa1-default-rtdb.europe-west1.firebasedatabase.app/jobs.json')
    .then(results => results.json())
    .then(data => {
      const yeet = data;
      console.log(yeet)
      setJobs(yeet)
    });
  }, [job]); 


  // if (jobs.length === 0) {
  //   return <>Loading...</>;

  // } else {
    
      return (

      <div>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          sx={{ pt: 5, pb: 2 }}
          gutterBottom
        >
          PaintED - For Planners
        </Typography>

        <Stack justifyContent="center" spacing={2}>
          <PlannerDropdown plans={jobs} setJob={setJob} job={job}/>

          <UploadPlan job={job} setJob={setJob}/>
          <PreviewPlan job={job} data={jobs[job]}/>
          <DeletePlan job={job} setJob={setJob}/>
        </Stack>
      </div>
    );
  }
// }
export default Planner;
