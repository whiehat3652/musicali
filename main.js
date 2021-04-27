music1 = "";
music2 = "";
leftWrist = 0;
leftWrist = 0;
rightWrist = 0;
rightWrist = 0;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup() 
{
    canvas = createCanvas(500, 450);
    canvas.center();    

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function modelLoaded()
{
    console.log("poseNet model is Initialized");
}

function gotPoses()
{
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);
 
    rightWristX = results[0].pose.rightWristX
    rightWristY = results[0].pose.rightWristY
    console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
}