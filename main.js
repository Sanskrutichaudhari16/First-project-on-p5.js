function preload(){

}


function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.hide();
} 

function draw(){
    image(video, 0, 0, 350, 350 );
    fill("purple");
    stroke("purple");
         fill("pink");
     stroke("pink");     
     rect(0, 320, 350, 50);
     rect(0, 0, 350, 50);
     circle(25, 320, 75);
     circle(325, 320, 75);
     circle(25, 35, 75);
     circle(325, 35, 75);


}

function take_snapshot(){
    save("project_photo.png");
}
