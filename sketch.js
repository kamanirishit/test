var ball
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,50,50);
}

function draw() {
  background(220);
  if(mousePressedOver(ball)){
    ball.velocityX=3;
  }
  drawSprites();
}