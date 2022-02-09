import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {Button} from '@mui/material';

function PreviewPlan(props) {
    const disabled = (props.job === '') //hacky temp solution
    return (
        <Button variant="contained" disabled={disabled} startIcon={<OpenInNewIcon />}>
        Preview plan (awaiting upload)
      </Button>
    );
}
export default PreviewPlan;