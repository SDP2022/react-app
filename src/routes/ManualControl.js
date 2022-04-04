import * as React from 'react';
import { Stack, Typography, Button,  } from "@mui/material";
import Pen from '../components/Pen';
import Stop from '../components/Stop';
import Controller from '../components/Controller';
import RobotMessages from '../components/RobotMessages';
import Camera from '../components/Camera';




function ManualControl(props) {




    return (

        <div>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            sx={{ pt: 5, pb: 3 }}
            gutterBottom
          >
            PaintED - Manual Control
          </Typography>

          <Stack justifyContent="space-evenly"  spacing={5}  sx={{}}>
            <RobotMessages/>

            <Stack justifyContent="space-evenly" direction="row" spacing={2}>
              <Controller ></Controller>

              <Stack justifyContent="center" spacing={2}>
                <Stack justifyContent="center" direction="row" spacing={2}>
                  <Pen kind={'up'}  fullwidth></Pen>
                  <Pen kind={'down'}  fullwidth></Pen>
                </Stack>
                <Stop></Stop>

              </Stack>
            </Stack>

            <Camera></Camera>

          </Stack>




        </div>
        
      );
    }
export default ManualControl;
