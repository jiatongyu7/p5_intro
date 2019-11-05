let num;

let maxColor;
let minColor;
let tempColor;
let tempC;
let center;
var rotateOri=0;
var rotateSpeed;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&APPID=16245fbe927bb3ca56c0977101a76268";
var input;

function preload(){
   // console.log(rotateOri);
   let url = "http://api.openweathermap.org/data/2.5/weather?q=Florida,us&APPID=16245fbe927bb3ca56c0977101a76268";
   loadJSON(url,gotWeather);
}

function setup(){
  createCanvas(700,700);
  background(250, 188, 185);
  center = createVector(350,350);
  noStroke();

  var button = select('#submit');
  button.mousePressed(askWeather);
  input = select('#city');

}

function draw(){

  fill(tempColor);
  ellipse(width/2, height/2, 200, 200);

  
  fill(255);
  textSize(30);
  text(tempC,width/2-40,height/2-10,100,100);



  push();
  translate(width/2,height/2);
  rotate(rotateOri,center);
  scale(.3);

  console.log(rotateSpeed);
  let num = floor(rotateSpeed);
  console.log(rotateOri);
  rotateOri += num;
  console.log("speed"+floor(rotateSpeed));
   
  fill(maxColor);
  ellipse(width/2-100, height/2, 150, 150);
    
  fill(minColor);
  ellipse(width/2-80, height/2-60, 150, 150);
  
  pop();
  
}

function askWeather(){

  var url = api + input.value() + apiKey;

  loadJSON(url,gotWeather);
}

function gotWeather(weather){

  angle = radians(Number(weather.wind.deg));
  max = Number(weather.main.temp_max);
  min = Number(weather.main.temp_min);
  tempC = Number(weather.main.temp);
  rotateSpeed = Number(weather.wind.speed);
  console.log(rotateSpeed);
  
  maxColor = color(map(max, 100, 400, 0, 255),100,100);
  minColor = color(map(min, 100, 400, 0, 255),50,50);
  tempColor = color(map(tempC, 100, 500, 0, 255), 0, 0);

  // maxColor = color(map(max, 0 ,200, 0, 255),100,100);
  // minColor = color(map(min, 0 ,200, 0, 255),50,50);
  // tempColor = color(map(tempC, 0, 500, 0, 255),100,100);
  // console.log(maxColor,minColor,tempColor);

  // fill(tempColor);
  // ellipse(width/2, height/2, 200, 200);
  // fill(255);
  // textSize(30);
  
  // text(tempC,width/2-40,height/2-10,100,100);
  
  


  // fill(maxColor);
  // ellipse(width/2-100, height/2, 50, 50);
    
  // fill(minColor);
  // ellipse(width/2-80, height/2-60, 50, 50);


  windmag = Number(weather.wind.speed);

  console.log(weather);
  
  num = floor(map(Number(weather.main.temp),0,500,0,255));
  //console.log(red);
}


