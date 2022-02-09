import * as React from 'react';
import { Typography, Stack, Button } from "@mui/material";
import PlannerDropdown from "../components/PlannerDropdown";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PreviewPlan from '../components/PreviewPlan';
import UploadPlan from '../components/UploadPlan';


function Planner(props) {

  //JSON of dummy data for current plans
  const DUMMY_DATA = [
    {
    'id' : 1,
    'date-uploaded' : '2022-01-01',
    'completed' : false,
    'file' : 'http://geojson.io/#id=gist:adeel567/60d444f3bb2a106260927990df9ae294&map=22/55.93982/-3.29329'
  },
  {
    'id' : 2,
    'date-uploaded' : '2022-01-02',
    'completed' : false,
    'file' : 'http://geojson.io/#id=gist:adeel567/60d444f3bb2a106260927990df9ae294&map=22/55.93982/-3.29329'
  }
]

//lifted state up so it can be accessed by other elements on page
const [job, setJob] = React.useState('');

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

      <Stack justifyContent="center" spacing={5}>
        <PlannerDropdown plans={DUMMY_DATA} setJob={setJob} job={job}/>

        <UploadPlan job={job}/>
        <PreviewPlan job={job}/>
      </Stack>
    </div>
  );
}
export default Planner;
