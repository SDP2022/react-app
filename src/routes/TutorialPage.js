import {Typography, Stack} from '@mui/material'
import TutorialCard from '../components/TutorialCard'
import VideoTutorial from '../components/VideoTutorial'


function TutorialPage() {
    const DUMM_TUTORIALS = [
        {
            'name' : 'Uploading a Geojson plan',
            'steps' : [ 
                {
                'img' : "https://i.imgur.com/x9lR7E4.png",
                'txt' : 'From the home screen, or the \'mode\' drop down menu, select \'Planner mode\'.  '
                },
                {
                    'img' : "https://i.imgur.com/3lhKEGD.png",
                    'txt' : 'From here select `UPLOAD PLAN FILE`, and select the desired Geojson file from your file system. This should generate a plan ID allow you to preview the plan on GeoJSon.io by selecting `PREVIEW PLAN`'
                },
                {
                    'img' : "https://i.imgur.com/3lhKEGD.png",
                    'txt' : 'If you wish to delete this upload ensure you have selected the correct Project ID and select `DELETE JOB`'
                }


            ]
        },
        {
            'name' : 'Executing a plan',
            'steps' : [ 
                {
                'img' :  "https://i.imgur.com/x9lR7E4.png",
                'txt' : 'To execute a plan first select worker mode, either from the home page or the `Mode` dropdown '
                },
                {
                    'img' :"https://i.imgur.com/6h5Zwrp.png",
                    'txt' : 'On the dropdown page select the project ID for the project you wish to execute, after this is done you can preview the plan by selecting `PREVIEW PLAN`'
                },
                                {
                    'img' : "https://i.imgur.com/aZmJOuN.png",
                    'txt' : 'If you are happy with everything from here you can start the painting, to do this click on the `BEGIN JOB` butoon. This will instruct the robot to start executing the plan'
                },
                {
                    'img' : "https://i.imgur.com/aZmJOuN.png",
                    'txt' : 'Updates on the robots progress will we displayed on screen, if the robot encounters an obsticle that couses it to stop, remove this obsticle and select `PLAY` to resume the job.'
                },
                {
                    'img' : "https://i.imgur.com/aZmJOuN.png",
                    'txt' : 'To take manual control of the robot at any point whilst the job is running, select take control.'
                },
                {
                    'img' : "https://i.imgur.com/K3ZNMDI.png",
                    'txt' : 'From here you can move the robot in any direction, and decide to lift or lower the painter'
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
