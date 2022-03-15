import {Typography, Stack} from '@mui/material'
import TutorialCard from '../components/TutorialCard'
import VideoTutorial from '../components/VideoTutorial'


function TutorialPage() {
    const DUMM_TUTORIALS = [
        {
            'name' : 'Connecting to the PaintBot',
            'steps' : [ 
                {
                'img' : "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg",
                'txt' : 'For example, this field can contain instrucions along with the above visual on how to complete a task such as connecting to the robot. '
                },
                {
                    'img' : "https://images.pexels.com/photos/5270658/pexels-photo-5270658.jpeg",
                    'txt' : 'This is the next step'
                }

            ]
        },
        {
            'name' : 'Uploading a plan',
            'steps' : [ 
                {
                'img' :  "https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg",
                'txt' : 'For example, this field can contain instrucions along with the above visual on how to complete a task such as uploading a plan. '
                },
                {
                    'img' :"https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg",
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
      sx={{ pt: 5, pb: 3 }}
      gutterBottom
    >
      PaintED - Tutorial Page.
    </Typography>

    {/* Store Tutorials as nested array. With multiple tutorials having multiple steps */}
    <Stack spacing={5}>

        <VideoTutorial></VideoTutorial>

        {DUMM_TUTORIALS.map((tut) => {
        return (<TutorialCard name= {tut.name} steps={tut.steps}/>)})
    }
    </Stack>


  </div>
    );
}
export default TutorialPage;
