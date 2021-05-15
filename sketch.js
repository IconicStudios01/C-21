var movingRect;
var fixedRect;
var pen;
var can;

function setup() {
  createCanvas(windowWidth,windowHeight);

  movingRect = createSprite(200,200,30,100);
  fixedRect = createSprite(500,200,100,30);
  pen = createSprite(100,200,100,30);
  can = createSprite(500,400,100,30);

  movingRect.shapeColor = "black";
  fixedRect.shapeColor = "black";
  pen.shapeColor = "black";
  can.shapeColor = "black";
}

function draw() 
{
  background(255,255,255);
  fixedRect.velocityX = 3;
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(isTouching(pen, movingRect)){
    pen.shapeColor = "blue";
  }
  else{
    pen.shapeColor = "black";
  }
  
  drawSprites();
}

function isTouching(object1, object2)
{
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
     object1.y - object2.y < object2.height/2 + object1.height/2 &&
     object2.x - object1.x < object2.width/2 + object1.width/2 &&
     object2.y - object1.y < object2.height/2 + object1.height/2 )
   {
   //movingRect.shapeColor = "red";
   //fixedRect.velocityX = -3;
   return true;
 }
 else{
   //movingRect.shapeColor = "black";
   return false;
 }
}