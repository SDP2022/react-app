import { Button, Typography, Grid } from "@mui/material";
import PlannerDropdown from '../components/PlannerDropdown'

function Worker(props) {
    return (
        
        <div>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          sx={{ pt: 5, pb:2}}
          gutterBottom
        >
          PaintED worker robot control.
        </Typography>

        <PlannerDropdown sx={{tm:200}}/>

        <Grid>

        </Grid>


        </div>
    )
}
export default Worker;