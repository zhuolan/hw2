function setup() {
  createCanvas (200,200);
background(255);
}
function draw(){ for(var i=0;i<1000;i=i+1){
var a=random(255);
var b=random (255);
var c=random(255);
colorMode(HSB,255,0,0);
stroke(a,b,c);
fill(a,b,c);
var d=random(25);
var e=random(150);
var f=random(150);
ellipse(e,f,d,d);
noLoop()
}
}
  