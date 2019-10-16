PImage imgBeer;
PImage imgHand;
PImage imgCheers;

void setup(){
  imgBeer = loadImage("beer.png");
  imgHand = loadImage("hand.png");
  imgCheers = loadImage("cheers.png");
  size(500, 500);
  background(255);
}

void draw(){
  if(mousePressed){
    background(random(255),0,random(255));
    image(imgCheers, 150, 100 + random(-20, 20));
  } else { 
    background(255);
    image(imgBeer,150,100);
  }
}
