
function preload(){
  //pre-load images
  path.png
  Jake1.png
  Jake2.png
  jake3.png
  jake4.PNG
  jake5.png
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200, 200)
  path.addImage(path.png)
  path.scale=1.2
  jake=createSprite(200,200)
  jake.loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")

}

function draw() {
  background(0);
  createEdgeSprites()
  rightEdge.visible=false
  leftEdge.visible=false
  jake.collide(rightEdge)
  jake.collide(leftEdge)
  path.velocityY=4
  jake.X=mouseX
if(path.y>400){
  path.y=height/2
}
  drawSprites()
}
