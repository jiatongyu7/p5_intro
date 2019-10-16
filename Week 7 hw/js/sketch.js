let imgBeer;
let imgHand;
let imgCheers;

function preload(){
    imgBeer = loadImage(images/cheers/imgBeer.png);
    imgHand = loadImage(images/cheers/hand/png);
    imgCheers = loadImage(images/cheers/imgCheers.png);
}

function setup(){
    image(imgBeer,0,0);
    image(imgHand,0,0);
    image(imgCheers,0,0);
    createCanvas(640,360);
    background(255);
}

function draw(){
    if (mouseIsPressed){
        background(random(255),0,random(255));
        image(imgCheers, 150,100 + random(-20,20));
    } else {
        background(255);
        image(imgBeer, 150, 100);
    }
}