function setup(){
    createCanvas(700, 400);
    bug = new Jitter();

}

function draw(){
    background(50, 80, 100);
    bug.display();
    bug.move();
}

class Jitter{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = (10, 30);
        this.speed = 1;  
    }
    display(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    
    move(){
        this.x += random(-this.speed, this.speed);
    }
}
