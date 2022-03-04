import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Button} from '@mui/material';

function PreviewPlan(props) {
    const disabled = (props.job === '') //hacky temp solution
    const test = (props.job === '') ? "Preview plan" : "Preview plan" 

    const viewPlan = () => {
      console.log(props.data.id)

      const stringy = encodeURIComponent((props.data.geoJSON))

      console.log(stringy)

      window.open("http://geojson.io/#data=data:application/json," + stringy)
    }

    return (
        <Button variant="contained" disabled={disabled} onClick={viewPlan} startIcon={<OpenInNewIcon />} fullWidth> 
        {test}
      </Button>
    );
}
export default PreviewPlan;