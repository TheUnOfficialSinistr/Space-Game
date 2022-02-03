let ground;
let lander;
var lander_img;
var bg_img;
var groundpart
var meteor
var meteor_img
var meteorGroup
var vx = 0;
var g = 0.05;
var vy = 0;
var f = -0.06

var score = 0;
var life = 5

var Vibes

var IDLE = 1
var PLAYING = 2;
var END = 3;

var gameState = IDLE





function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  meteor_img = loadImage("meteor.png");
  Music = loadSound("Space.wav")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  groundpart = createSprite(250,600,500,2);
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider('rectangle', 0,0,200,200)
  meteorGroup = new Group();
  rectMode(CENTER);
  textSize(15);
  Music.play();
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

 


if (gameState === IDLE){
  lander.visible = true;
    textSize(60);
    fill('white');
  text("Press Play to Start!", 250, 200);
  lander.x = 50;
  lander.y = 100;

  textSize(15)
text("Score:"+ score, 800, 40)
text("Lives:"+ life, 800, 100)

}

if (gameState === IDLE && keyCode === 32){
  gameState = PLAYING;
}

if (gameState === PLAYING){
  fill('white');
  text("Score:"+ score, 800, 40)
  text("Lives:"+ life, 800, 100)

  score = score + Math.round(getFrameRate()/60);

    //fall down
    vy +=g;
    lander.position.y+=vy;
  
  if(groundpart.isTouching(lander)){
  lander.position.y = groundpart.position.y;
  
  }
  
  meteor = createSprite
  
  if (frameCount % 60 === 0) {
    createmeteor();
  }
  
  
  if(meteorGroup.isTouching(lander)){
    meteorGroup.destroyEach();
    lander.x = 50;
    lander.y = 100;
    meteor.velocityX = 0;
   lander.visible = false;
   meteorGroup.destroyEach();
   gameState = IDLE;
   life = life - 1;

  
  }
  if (life === 0){
    gameState = END;
  }




}

if (gameState === END){
  fill('white');
  textSize(40);
  text("GAME OVER, YOU SCORED: " + score, 250, 200)
  text("Press R to Restart", 250, 250)
  

}

if(gameState === END && keyCode ===82){
  score = 0;
  life = 5;
  gameState = IDLE;
  
}





  drawSprites();
}


function createmeteor (){
  meteor = createSprite(1200, random(100,500))
  meteor.addImage(meteor_img);
  meteor.scale = .3
meteor.velocityX = random(-10, -20);
meteorGroup.add(meteor);
}





function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    
  }
}

function upward_thrust()
{
  vy = -1;
}