import { Button, Typography, Grid } from "@mui/material";
import {Link} from 'react-router-dom'


function WelcomePage(props) {
  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        color="textPrimary"
        sx={{ pt: 5 }}
        gutterBottom
      >
        Welcome to PaintED!
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        If you are a planner, select 'Planner Mode' to submit a plan. Otherwise if
        you are a worker, select 'Worker Mode' to execute a task.
      </Typography>

      <div>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs align="center">
            <Button  component={Link} to="/planner" variant="contained" color="primary">
              Planner mode
            </Button>
          </Grid>
          <Grid item xs align="center">
            <Button component={Link} to="/worker" variant="contained" color="primary">
              Worker mode
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default WelcomePage;
