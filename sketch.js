var ookla, ookla_running_left, ookla_running_right, ookla_standing,ooklastand1,ooklastand2;
var sleeping_guard, guardsleep
var guard_1, guard_2
var background_jail, jail_background;
var Cage, Cage_2, lockpik, lockpikImg
var wall;
var gameState = 1;
var laser_1, laser_2, laser_3, laser_4

function preload() {
  ookla_running_left = loadAnimation("animation/ookla_left.png", "animation/ooklaleft2.png", "animation/ooklaleft3.png", "animation/ooklaleft4.png");
  ookla_running_right = loadAnimation("animation/pixel.png", "animation/pixel2.png", "animation/pixel3.png");
  ookla_standing = loadImage("animation/ookla.png")
  background_jail = loadImage("animation/jail.png")
  sleeping_guard = loadImage("animation/sleepingguard.gif")
  lockpikImg = loadImage("animation/lockpik.png");
  wall = loadImage("animation/wall.jpg");
  ooklastand1 = loadImage("animation/ookla_left.png")
  ooklastand2 = loadImage("animation/pixel.png")
}

function setup() {
  createCanvas(1200, 700);
  Cage = createSprite(790, 600, 10, 700)
  Cage_2 = createSprite(10, 400, 10, 700)

  ookla = createSprite(420, 550, 20, 60)

  ookla.addAnimation("ooklastand4",ooklastand1)
  ookla.addAnimation("ooklastand3",ooklastand2)


  ookla.scale = 3
  ookla.addAnimation("ooklaRight", ookla_running_right);
  ookla.addAnimation("ooklaLeft", ookla_running_left);
  lockpik = createSprite(25, 660);
  lockpik.addImage(lockpikImg);

  //jail_background = createSprite(350,350,700,700);
  //jail_background.addImage(background_jail);
  Cage.visible = false;
  Cage_2.visible = false;

}


function draw() {
  background("blue");
  text("X:" + mouseX, 1100, 100)
  text("Y:" + mouseY, 1100, 120)
  if (gameState === 1) {

    imageMode(CENTER)
    image(background_jail, 400, 350, 800, 700)
    image(sleeping_guard, 1000, 350, 400, 700)
    ookla.collide(Cage);
    ookla.collide(Cage_2);

    if (keyDown("right")) {
      ookla.changeAnimation("ooklaRight", ookla_running_right);
      ookla.y = 617
      ookla.velocityX = 5
    }
    if (keyDown("left")) {
      ookla.changeAnimation("ooklaLeft", ookla_running_left);
      ookla.y = 617
      ookla.velocityX = -5
    }
    if(keyWentUp("right")){
      ookla.changeAnimation("ooklastand3",ooklastand2)
      ookla.velocityX = 0
    }
    if(keyWentUp("left")){
      ookla.changeAnimation("ooklastand4",ooklastand1)
      ookla.velocityX = 0
    }

    if (ookla.isTouching(lockpik)) {
      Cage.destroy();
      lockpik.visible = false;
      fill(225);
      textSize(25);
      textAlign(CENTER);
      text('Congrats you found the pick now escape the jail', 420, 400);
      
    }

    if (ookla.velocityX === -5 && ookla.x >= 800) {
      ookla.changeAnimation(ookla_standing)
      ookla.x = 420
      fill(225);
      textSize(60);
      textAlign(CENTER);
      text('you got caught', 180, 400)
    }


    


    if (ookla.x >= 1195) {
      gameState = 2;
      ookla.x = 100;
    }
  } else if (gameState === 2) {
    background("blue");
    imageMode(CENTER)
    image(wall, 600, 350, 1200, 700)
    text("X:" + mouseX, 1100, 100)
    text("Y:" + mouseY, 1100, 120)
    if (keyDown("right")) {
      ookla.changeAnimation("ooklaRight", ookla_running_right);
      ookla.y = 617
      ookla.velocityX = 5
    }
    if (keyDown("left")) {
      ookla.changeAnimation("ooklaLeft", ookla_running_left);
      ookla.y = 617
      ookla.velocityX = -5
    }
    if(keyWentUp("right")){
      ookla.changeAnimation("ooklastand3",ooklastand2)
      ookla.velocityX = 0
    }
    if(keyWentUp("left")){
      ookla.changeAnimation("ooklastand4",ooklastand1)
      ookla.velocityX = 0
    }
    laser_1 = createSprite(352, 400, 10, 350)
    laser_2 = createSprite(600, 400, 10, 400)
    laser_3 = createSprite(800, 400, 10, 350)
    laser_4 = createSprite(990, 400, 10, 400)
    laser_1.shapeColor = "Red"
    laser_2.shapeColor = "Red"
    laser_3.shapeColor = "Red"
    laser_4.shapeColor = "Red"
    laser_1.velocityY = 2
    laser_2.velocityY = 1.5
    laser_3.velocityY = 2.5
    laser_4.velocityY = 1
    

  }


  text("X:" + mouseX, 1100, 100)
  text("Y:" + mouseY, 1100, 120)
  Cage.visible = false;
  if (keyDown("right")) {
    ookla.changeAnimation("ooklaRight", ookla_running_right);
    ookla.y = 617
    ookla.velocityX = 5
  }
  if (keyDown("left")) {
    ookla.changeAnimation("ooklaLeft", ookla_running_left);
    ookla.y = 617
    ookla.velocityX = -5
  }








  drawSprites();

}