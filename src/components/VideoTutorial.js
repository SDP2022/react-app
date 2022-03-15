import ReactPlayer from "react-player"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography, Stack} from '@mui/material'


function VideoTutorial() {


    return (
        <div>

        <Card>
            <ReactPlayer
                width={560}
                url="https://www.youtube.com/watch?v=z1LPuNwJO7g"
                controls={true}
          />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Web Interface Video Tutorial
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Watch this video to learn how to use the web interface.
                </Typography>
            </CardContent>
        </Card>


        </div>
      )
}

export default VideoTutorial;