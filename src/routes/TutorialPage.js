import {Typography, Stack} from '@mui/material'
import TutorialCard from '../components/TutorialCard'

function TutorialPage() {
    const DUMM_TUTORIALS = [
        {
            'name' : 'Connecting to the PaintBot',
            'steps' : [ 
                {
                'img' : "https://live.staticflickr.com/2796/4398656115_ceb9a987ce_b.jpg",
                'txt' : 'For example, this field can contain instrucions along with the above visual on how to complete a task such as connecting to the robot. '
                },
                {
                    'img' : "",
                    'txt' : 'This is the next step'
                }

            ]
        },
        {
            'name' : 'Uploading a plan.',
            'steps' : [ 
                {
                'img' : "https://live.staticflickr.com/2789/4399422648_1d4b799699_b.jpg",
                'txt' : 'For example, this field can contain instrucions along with the above visual on how to complete a task such as uploading a plan. '
                },
                {
                    'img' : "",
                    'txt' : 'This is the next step'
                }

            ]
        }      
    ]

    return(
  <div>
    <Typography
      variant="h4"
      align="center"
      color="textPrimary"
      sx={{ pt: 5, pb: 2 }}
      gutterBottom
    >
      PaintED tutorial page
    </Typography>

    {/* Store Tutorials as nested array. With multiple tutorials having multiple steps */}
    <Stack spacing={5}>
        {DUMM_TUTORIALS.map((tut) => {
        return (<TutorialCard name= {tut.name} steps={tut.steps}/>)})
    }
    </Stack>


  </div>
    );
}
export default TutorialPage;
