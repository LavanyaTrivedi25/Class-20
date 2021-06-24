var fixedRect, movingRect;
var gameObject1, gameObject2;
function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect2 = createSprite(400,400,50,80);
  fixedRect2.shapeColor = "green"

  fixedRect3 = createSprite(600,300,50,80)
  fixedRect3.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
else if (isTouching(fixedRect2,movingRect)){
    fixedRect2.shapeColor = "red"
    movingRect.shapeColor = "red"

}

else if(isTouching(fixedRect3,movingRect)){
     fixedRect3.shapeColor = "purple"
     movingRect.shapeColor = "purple"

}
  else {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green"
    fixedRect3.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
 
//bounceOff(movingRect,fixedRect)
  drawSprites();
}