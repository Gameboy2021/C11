var trex ,trex_running;
var edges;
var groundImage;
var invisibleGround;

//we are going to load all the needed sounds or images
function preload()
{
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage= loadImage("ground2.png");
}

//going to declare all the sprites
function setup()
{
  createCanvas(600,200)
  
  trex= createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running)
  trex.scale= 0.5;
  trex.x=50;

  edges=createEdgeSprites()

  ground=createSprite(200,180,400,20)
  ground.addImage("ground",groundImage);
  ground.x=ground.width/2;

  invisibleGround= createSprite(200,190,400,10);
  invisibleGround.visible= false;



}

// implementations
function draw()
{
    background("white");

    console.log(trex.y);

    ground.velocityX= -2;
    console.log(ground.x);

    if (keyDown("space")&& trex.y>=100)
    {
      trex.velocityY= -10
    }

    if(ground.x<0)
    {
      ground.x=ground.width/2;
    }

    trex.collide(invisibleGround)
    trex.velocityY=trex.velocityY+0.5;
    trex.collide(edges[3])


    drawSprites();
}
