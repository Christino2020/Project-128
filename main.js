function setup(){
    canvas = createCanvas(450, 450)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)

}
harryPotter = "";
yesterday = "";

function preload(){
    harryPotter = loadSound("hp.mp3")
    yesterday = loadSound("yesterday.mp3") 
     
}
leftWristX = 0 
rightWristX = 0
leftWristY = 0
rightWristY = 0

function modelLoaded(){
    console.log('Posenet is ready')
}


function draw(){
    image(video, 0, 0, 450, 450)
}

function gotPoses(results){
    if (results.length > 0){
console.log(results)
rightWristX = results[0].pose.rightWrist.x
leftWristX = results[0].pose.leftWrist.x
rightWristY = results[0].pose.rightWrist.y
leftWristY = results[0].pose.leftWrist.y
console.log("leftWristY = "+ leftWristY+ "rightWristY = " + rightWristY + "rightWristX = " + rightWristX + "leftwristX = "+ leftWristX)

    }
}

