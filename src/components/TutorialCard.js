import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';


export default function MediaCard(props) {
    //store state of step
    const [stepCount, setStepCount] = useState(0);
    const maxSteps = props.steps.length;

    const prevStep = () => { 
       stepCount === 0 ? setStepCount(0) : setStepCount(stepCount-1)
    }
    const nextStep = () => { 
        stepCount === maxSteps-1 ? setStepCount(maxSteps-1) : setStepCount(stepCount+1)
        console.log(stepCount);
    }

  return (
    <Card>
      <CardMedia
        component="img"
        // height="140"
        image={props.steps[stepCount].img}
        alt="placeholder img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.steps[stepCount].txt} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={prevStep}>Previous Step</Button>
        <Button size="small" onClick={nextStep}>Next Step</Button>
      </CardActions>
    </Card>
  );
}