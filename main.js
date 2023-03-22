noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
GameStatus = "";

function game(){
console.log("noseX = " + noseX ", noseY = " + noseY);
}

function startGame()
{
    GameStatus = "start";
    document.getElementById("status").innerHTML = "Game Is Loading";
}

function preload()
{
    world_start = loadSound("world_start.wav");
    setSprites();
    MarioAimation();
img = loadImage("mario.jpg");
}

function setup()
{
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');
    
    instializeInSetup(mario);
    
    createCanvas(650, 400);
    video = createCapture(VIDEO);
    video.size = (600,300);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    video.parent('game_console');
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX ", noseY = " + noseY);
    } 
}

function modelLoaded(){
    console.log ('Model Loaded');
}
 function draw()
{
    background(background.jpg);
    if(noseX < 300)
    {
        marioX = marioX - 1;
    }
    if(noseX > 300)
    {
        marioX = marioX + 1;
    }
    if(noseY < 150)
    {
        marioY = marioY - 1;
    }
image(img,marioX,marioY,40,70);
}
