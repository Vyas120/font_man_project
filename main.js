NoseX = 0;
NoseY = 0;
LWristX = 0;
RWristX = 0;
Difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(530,400);
    canvas = createCanvas(530,400);
    canvas.position(680,140);
    posenet = ml5.poseNet(video,Modelloaded);
    posenet.on('pose',gotresults);
}

function Modelloaded(){
    console.log("it works!!");
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
    }
}