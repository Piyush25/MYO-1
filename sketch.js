
var spacecraft, spacecraftImage;
var background, backgroundImage;

var ground;

var gravity = 0.05;
var velocityx = 0;
var velocityy = 0;


function preload()
{
  spacecraftImage = loadImage("normal.png");
backgroundImage = loadImage("bg_sur.png");

}

function setup() {
   createCanvas(1000,700);
   frameRate(80);

   
 
   spacecraft = createSprite(100,50,30,30);
   spacecraft.addImage(spacecraftImage);
   spacecraft.scale = 0.1;
   spacecraft.setCollider("rectangle",0,0,200,200)
 
   rectMode(CENTER);
   textSize(15);
 }
 
 function draw() 
 {
   background(51);
   image(backgroundImage,0,0);
   push()
   fill(255);
   text("verticalvelocityy: "+round(velocityy),800,75);
   pop();
 
   

   //fall down
   velocityy +=gravity;
   spacecraft.position.y+=velocityy;
   drawSprites();
 }

 function keyPressed()
 {
   if(keyCode==UP_ARROW)
   {
   upward_thrust();
   spacecraft.changeAnimation('thrusting');
   thrust.nextFrame();
 }
 }

function upward_thrust()
{

  velocityy = -1;
}














 
 
 

