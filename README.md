
![PaintED Logo](https://cdn.discordapp.com/attachments/932588913636282371/958905784345985064/largelogo_copy.png)


# PaintED React Web App

React.js web app which is used to control the PaintED PaintBOT. 

Uses the Material UI library for the user interface design.

As you may be able to tell, I wrote this while learning JS/React on the fly..

Connects with Firebase for user information, and makes a web socket connection for connection to the robot (see .env)



## Features

- React router to implement pages
- Planner mode to (re)upload, preview, and delete plans
- Worker mode to preview and execute a chosen plan
- Ability to pause and resume execution of a plan
- View a live camera feed of the robot
- Status messages displayed on screen
- Manual control to move robot and pen, sound the emergency alert system (LEDs and annoying buzzer)
- Tutorial page if you seek to learn more
- Cat API implemented so that if live camera is down, you see a cute cat instead :)
- Cross platform


## Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/953687424192639097/960944965435940914/Screenshot_2022-04-05_at_17.13.57.png)
![App Screenshot](https://cdn.discordapp.com/attachments/953687424192639097/960944964316045442/Screenshot_2022-04-05_at_17.14.18.png)
![App Screenshot](https://cdn.discordapp.com/attachments/953687424192639097/960942315856334858/Screenshot_at_2022-04-05_17-17-32.png)
![App Screenshot](https://cdn.discordapp.com/attachments/953687424192639097/960942315613061120/Screenshot_at_2022-04-05_17-15-10.png)



## Environment Variables


`REACT_APP_FIREBASE_URL` - The Firebase instance will be killed when SDP is done, if for some reason you want to view this project then make your own with the same schema including a stringified geoJSON plan.

`REACT_APP_ROSBRIDGE_HOSTNAME` - Robot web socket location with port


## Run Locally

Clone the project

```bash
  git clone $project-url
```

Go to the project directory

```bash
  cd $project-name
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run
```


## Authors

- [@adeel567](https://www.github.com/adeel567)


## Acknowledgements

 - [Fuel when developing](https://www.tesco.com/groceries/en-GB/shop/fresh-food/chilled-soup-sandwiches-and-salad-pots/pound3-meal-deal)


## Feedback

If you have any feedback, please don't reach out to us as this will not be maintained after industry day.

