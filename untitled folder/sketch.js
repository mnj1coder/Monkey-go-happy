var monkey = createSprite(78,325,10,10);
monkey.setAnimation("monkey");
monkey.scale = 0.2;

var banana = createSprite(405,168,10,10);

var ground = createSprite(200,380,400,10);
ground.setAnimation("ground");


var stone = createSprite(405,375,10,10);







function draw() {
  
  background(255);
  
  Bananafruit();
  console.log(World.frameCount);
  Stonebreakbone();
  
  monkey.collide(ground);
  stone.collide(ground);
 
monkey.velocityY = 0.1;

monkey.collide(stone);

if(monkey.isTouching(stone)){
  stone.velocityX = 0;
  
}

 
  if(keyDown("UP_ARROW")){
    monkey.velocityY = -3;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  
 drawSprites();   
  
}

function Bananafruit(){
  if (World.frameCount% 80 === 0){
 
 banana.setAnimation("Banana");
 banana.scale = 0.05;
 banana.velocityX= -2;
  }
  
  if(banana.isTouching(monkey)){
    banana.destroy();
  }
 
 var BananaGroup = createGroup();
 BananaGroup.add(banana);

  
}

function Stonebreakbone(){
  if(World.frameCount === 100){
    stone.velocityX = -2;
    stone.scale = 0.2;
    stone.setAnimation("Stone");
  }
}











  