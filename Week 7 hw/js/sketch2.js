var squareSize = 100;
var ellipseSize = 255;

funciton setup(){
    createCanvas(800, 800);
}

function draw(){
    background(250,50,46);
    fill(413, 255, 0);
    ellipse(random(width), random(height), ellipseSize, ellipseSize); 
    fill(30,25,0);
    triangle(30, 75, 58, 20, 86, 75);
    fill(00, 50, 150);
    square(mouseX, mouseY, squareSize);
}