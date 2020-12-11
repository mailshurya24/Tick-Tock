var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  //seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,100,200);
  pop();

  //minute hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(400,200,70,0);
  pop();

  //hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(400,200,50,0);
  pop();

  drawSprites();
}