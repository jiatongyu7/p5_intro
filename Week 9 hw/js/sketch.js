//var url = "http://api.giphy.com/v1/gifs/search?q=dog&api_key=3k8wPI7cf9hql8uEwWQitRbSb6HThkYO"

var api = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=3k8wPI7cf9hql8uEwWQitRbSb6HThkYO";

var input;

function setup(){
  noCanvas();

  var button = select('#submit');
  button.mousePressed(askData);
  input = select('#gif');
}

function askData(){
  var url = api + input.value() + apiKey;
  loadJSON(url, gotData);
}

function gotData(giphy){
    createImg(giphy.data[0].images.original.url);
}
