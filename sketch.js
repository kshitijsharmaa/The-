
var r;
var g;
var b;

function setup(){
  createCanvas(1200,400);
}

function draw(){
  background(r,g,b);
  r = World.mouseX/5;
  g = World.mouseY/2;
  b = r+g/2;

}