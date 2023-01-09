function preload(){

}
function setup(){
    canvas = createCanvas(620, 450);
    canvas.position(400, 150);
    video = createCapture(VIDEO);
    video.hide();
}
    
function draw(){
    image(video, 0, 0, 610, 450);
    fill('pink');
    rect(30, 30, 30, 390);
    rect(550, 30, 30, 390);
    rect(30, 35, 550, 30);
    rect(30, 385, 550, 30);
    fill('#fae');
    circle(45, 50, 50);
    circle(45, 400, 50);
    circle(45, 225, 50);
    circle(565, 50, 50);
    circle(565, 400, 50);
    circle(565, 225, 50);
    circle(310, 50, 50);
    circle(310, 400, 50);
}
function take_snapshot(){
    save('birthdayphotos.png');
}