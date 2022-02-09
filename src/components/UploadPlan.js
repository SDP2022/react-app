import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Button} from '@mui/material';

function UploadPlan(props) {
    const color = (props.job === '') ? "primary" : "warning" //hacky temp solution
    const text = (props.job === '') ? "Upload plan file" : "Reupload plan file"

    return (
        <Button variant="contained" color={color} startIcon={<UploadFileIcon />}>
          {text}
        </Button>
    );
}
export default UploadPlan;