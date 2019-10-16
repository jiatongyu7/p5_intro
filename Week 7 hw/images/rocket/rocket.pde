int x = 50;
int y = 300;
PImage imgRocket;

Star[] stars = new Star[100];

class Star {
  float a;
  float b;
  
  Star(){
    a = random(0, width);
    b = random(0, height);
  }
  
  void Sky(){
  fill(255);
  noStroke();
  circle(a, b, random(3,4));
}
}
     
void setup(){
  size(500, 500);
  for(int i = 0; i <  stars.length; i++){
    stars[i] = new Star();
  imgRocket = loadImage("rocket.png");
  imgRocket.resize(60, 60);
  
  }  
}


void draw(){
  background(3, 0, 59);
  image(imgRocket, x + random(5, 10), y+ random(5, 10));
  for(int i = 0; i <  stars.length; i++){
  stars[i].Sky();
  }  
}

void keyPressed(){
  if(key == CODED){
    if(keyCode == UP){
      y -= 10;
    }else if(keyCode == DOWN){
      y += 10;
    }else if(keyCode == LEFT){
      x -= 10;
    }else if(keyCode == RIGHT){
      x += 10;
    }
  }
}

      
