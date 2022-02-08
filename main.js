status = "";

function setup(){
    canvas = createCanvas(380,280);
    canvas.center();

    video  = createCapture(VIDEO);
    video.hide();

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

    object_name = document.getElementById("object_name").value;
}

function modeLoaded(){
   
    status = true;
}
console.log("model loaded!"); 


function draw(){
    image(video, 0,0, 380, 280);
}