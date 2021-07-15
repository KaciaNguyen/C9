var box;

function setup() {
  createCanvas(800,800);
  box = createSprite(200,200,60,60);
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 2
  }
  if(keyDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 2
  }
  drawSprites();
}




