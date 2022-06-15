var noseX=0;
var noseY=0;

function preload(){
    clownNose=loadImage("https://i.postimg.cc/G3FZnp7L/PNGPIX-COM-Moustache-PNG-Image-15.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    // fill(255,0,0);
    // stroke(255,0,0);
    // circle(noseX,noseY,20);
    image(clownNose,noseX,noseY,30,30);
}
function takesnapshot(){
    save('clownimage.jpg')
}
function modelLoaded(){
    console.log('poseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
    console.log(results);
    noseX=results[0].pose.nose.x-10;
    noseY=results[0].pose.nose.y+20;
    console.log("nose x = "+ results[0].pose.nose.x);
    console.log("nose y = "+ results[0].pose.nose.y);
}}