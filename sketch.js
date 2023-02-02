//Global variables for images
var bg, sun, s_pan, fan_anim,fan_img,display, g_house_img;
var City,CityI
var Boom,boomI;
var Player,playerI;
var Enemy,EnemyI;
var Enemy_2,Enemy_2I;
var Nuker,NukerI;
var player_sound;
var Enemy_boom,Enemy_boomI;
var score=0;
var Enemy_Missile;
var Enemy_2_Missile;
var Game_Over;
var Enemy_3Image;  
var Enemy_4Image;
//Global variables for Sprites
var g_house, pan1,pan2,fan,fan2;
var egroup;
//Creating a ray group
var rayGroup;

//Creating temprature and voltage variables
var temp = 10
var panel1_voltage =0;
var panel2_voltage=0;
var power_gen = 0;
var gameState=1;
var e_3,e_4,e_5,e_6,e_7,e_8;
var e_9,e_10;
var p2,p3;
var n2,n3;
var l1,l2,l3;
var levl2,L2img;
var Fe1,Fe1I;

function preload()
{
  Game_Over = loadImage("GameOver.png")
  Enemy_boomI = loadImage("Enemy Blast.png")
  CityI = loadImage("bg.jpg");
  CityI.velocityY = 0.1
  e_10 = loadImage("Enemy__1.png")
  boomI = loadImage("Blast.png");
  PlayerI = loadImage("F - 35.png");
  Fe1I = loadImage("Enemy__1.png")
  EnemyI = loadAnimation("Enemy__1.png");
  Enemy_2I = loadImage("Enemy_2.png");
  NukerI = loadImage("Nuker.png");
  n2 = loadImage("Nuker.png");
  n3 = loadImage("Nuker.png");
  Enemy_MissileI = loadImage("Enemy_1_missile.png");
  Enemy_2_MissileI = loadImage("Enemy__2__missile.png");
  sunR = loadImage("sunrays.png");
  sunL = loadImage("sunrays1.png");
  bg = loadImage("bgimage.png");
  s_pan = loadImage("s_panel.png");
  L2img = loadImage("level2.png");
  //fan_anim.play = false;
  fan_img = loadImage("fan01.png");
  display = loadImage("disp.png");
  g_house_img = loadImage("greenhouse.png");
  jetSound = loadSound("player_sound.mp3")
  //Add animation for moving Fan
  fan_anim= loadAnimation("fan01.png","fan02.png","fan03.png","fan04.png","fan05.png");
  
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  // // jetSound.play();
  // jetSound.setVolume(0.01);
  
  Player = createSprite(400,700,10); 
  Player.addImage(PlayerI); 
  Player.scale = 0.5; 
  Player.visible=true;
  Player.debug=true;
  Player.setCollider("circle",10,10);
  
  p2 = createSprite(300,600,10);
  p2.addImage(PlayerI);
  p2.scale = 0.3;
  p2.visible = false;
  p2.debug = true;
  p2.setCollider("circle",10,10);

  p3 = createSprite(500,600,10);
  p3.addImage(PlayerI);
  p3.scale = 0.3;
  p3.visible = false;
  p3.debug = true;
  p3.setCollider("Circle",10,10);

  Boom = createSprite(400,200); 
  Boom.addImage(boomI); 
  Boom.scale = 0.2; 
  Boom.visible=false;
  
  Enemy = createSprite(200,20,10); 
  Enemy.addAnimation("plane",EnemyI);
  Enemy.addAnimation("boom",boomI) ;
  Enemy.scale = 0.5 ; 
  Enemy.velocityY = 2; 
  Enemy.setCollider("circle",0,0,100)
  Enemy.debug=true;
  
  Enemy_2 = createSprite(400,30,10); 
  Enemy_2.addImage("plane",Enemy_2I);
  Enemy_2.addImage("boom",boomI) 
  Enemy_2.scale = 0.2; 
  Enemy_2.velocityY = 5; 
  Enemy_2.debug=true;
 
  
  Nuker = createSprite(600,100,10); 
  Nuker.addImage(NukerI); 
  Nuker.scale = 0.05; 
  Nuker.velocityY = -150;
  Nuker.debug=false;
  Nuker.visible=true; 

  n2 = createSprite(600,100,10); 
  n2.addImage(NukerI); 
  n2.scale = 0.05; 
  n2.velocityY = -150;
  n2.debug=false;
  n2.visible=false; 
  
  n3 = createSprite(600,100,10); 
  n3.addImage(NukerI); 
  n3.scale = 0.05; 
  n3.velocityY = -150;
  n3.debug=false;
  n3.visible=false; 

  Enemy_Missile = createSprite(200,20,10);
  Enemy_Missile.addImage(Enemy_MissileI);
  Enemy_Missile.scale = 0.05;
  Enemy_Missile.velocityY = 10;
  Enemy_Missile.debug = false
    
  e_3 = createSprite(Math.round(random(50,700)),20,10); 
  e_3.addAnimation("plane",EnemyI);
  e_3.addAnimation("boom",boomI) ;
  e_3.scale = 0.2; 
  e_3.velocityY = 2; 
  e_3.debug=true;

  e_4 = createSprite(Math.round(random(80,500)),20,10); 
  e_4.addAnimation("plane",EnemyI);
  e_4.addAnimation("boom",boomI) ;
  e_4.scale = 0.2  ; 
  e_4.velocityY = 2; 
  e_4.debug=true

  e_5 = createSprite(Math.round(random(550,600)),20,10); 
  e_5.addAnimation("plane",EnemyI);
  e_5.addAnimation("boom",boomI) ;
  e_5.scale = 0.2  ; 
  e_5.velocityY = 2; 
  e_5.debug=true
  
  e_6 = createSprite(Math.round(random(60,400)),20,10); 
  e_6.addAnimation("plane",EnemyI);
  e_3.addAnimation("boom",boomI) ;
  e_6.scale = 0.2  ; 
  e_6.velocityY = 2; 
  e_6.debug=true
  
  e_7 = createSprite(Math.round(random(90,300)),20,10); 
  e_7.addAnimation("plane",EnemyI);
  e_7.addAnimation("boom",boomI) ;
  e_7.scale = 0.2  ; 
  e_7.velocityY = 2; 
  e_7.debug=true
  
  e_8 = createSprite(Math.round(random(width/2+500,400)),20,10);
  e_8.addAnimation("plane",EnemyI);
  e_8.addAnimation("boom",boomI);
  e_8.scale = 0.2;
  e_8.velocityY = 2;
  e_8.debug = true;
  e_8.setCollider("circle",10,10);
  
  e_9 = createSprite(Math.round(random(width/2+900,1000),20,10));
  e_9.addAnimation("plane",EnemyI);
  e_9.addAnimation("boom",boomI);
  e_9.scale =  0.2;
  e_9.velocityY = 2;
  e_9.debug = true;
  e_9.setCollider("circle",5,5);

  e_10 = createSprite(750,10,10,10);
  e_10.addAnimation("plane",EnemyI);
  e_10.addAnimation("boom",boomI);
  e_10.scale =  0.5;
  e_10.visible = false;
  e_10.velocityY = 0;
  e_10.debug = true;
  e_10.setCollider("circle",5,5);

  l1=createSprite(Math.round(random(width/3+650,500),20,21))
  l1.addAnimation("plane",EnemyI);
  l1.addAnimation("boom",boomI);
  l1.scale = 0.3;
  l1.visible = true;
  l1.velocityY = 0.5;
  l1.debug = true;
  l1.setCollider("circle",5,5);
  
  go=createSprite(750,350,10,10);
  go.addImage(Game_Over);
  go.visible=false;

  levl2=createSprite(700,320,20,10);
  levl2.addImage(L2img);
  levl2.visible=false;
  //egroup=new Group();
  
}

function draw() 
{
   image(CityI,0,0,width,height)

   
 if(gameState===1)
 {
   // this condition is used to take player plane leftside.
   if(keyDown("LEFT_ARROW"))
    {
     Player.x=Player.x-10
    }

    if (Player.x>=1500)
    {
        Player.x=1500; 
    }

    if (Player.x<=50)
    {
        Player.x=50
    }
  
    if (Player.y>=750)
      {
      Player.y=750;
      }

    if (Player.y<50)
    {
      Player.y=50;
    }

    if(keyDown("LEFT_ARROW"))
    {
     p2.x=p2.x-10
    }

    if (p2.x>=1500)
    {
        p2.x=1500; 
    }

    if (p2.x<=50)
    {
        p2.x=50
    }
  
    if (p2.y>=750)
      {
      p2.y=750;
      }

    if (p2.y<50)
    {
      p2.y=50;
    }

    if(keyDown("LEFT_ARROW"))
    {
     p3.x=p3.x-10
    }

    if (p3.x>=1500)
    {
        p3.x=1500; 
    }

    if (p3.x<=50)
    {
        p3.x=50
    }
  
    if (p3.y>=750)
      {
      p3.y=750;
      }

    if (p3.y<50)
    {
      p3.y=50;
    }

    if (keyDown("RIGHT_ARROW"))
      {
      Player.x=Player.x+10;
      }

      if (keyDown("RIGHT_ARROW")) {
        p2.x = p2.x+9;
      }

      if (keyDown("RIGHT_ARROW")) {
        p3.x = p3.x+10
      }

    if (keyDown("UP_ARROW")){
        Player.y = Player.y-10;
      
    }

    if (keyDown("UP_ARROW")) {
      p2.y = p2.y-10;
    }

    if (keyDown("UP_ARROW")) {
      p3.y = p3.y-10;
    }

    if (keyDown("space"))
      {
        Nuker.x = Player.x;
        Nuker.y = Player.y -100;
        Nuker.velocityY = -50;
       
      }

      if (keyDown("space")) {
          n2.x=p2.x;
          n2.y=p2.y - 100;
          n2.velocityY = -50
      }

      if (keyDown("space")) {
          n3.x=p3.x;
          n3.y=p3.y -100;
          n3.velocityY = -50
      }

      if (Enemy.isTouching(Player))
      {
        Enemy.changeAnimation("boom",boomI);
        gameState=0
      }
         
      if(Nuker.isTouching(Enemy))
      {
        Enemy.changeAnimation("boom",boomI);
        Enemy.lifetime=10;
        score = score+1;
        
      }


      if (Nuker.isTouching(Enemy_2))
        {
          Enemy_2.changeAnimation("boom",boomI);
          Enemy_2.lifetime = 10;
          score = score+1;
          
        }
        
  
    if(Enemy.isTouching(Player))
    {
      Player.changeAnimation("boom",boomI)

      gameState=0
      Player.visible=false;
    }
      
  if (e_3.isTouching(Player))
  {
    e_3.changeAnimation("boom",boomI);
    gameState=0
    Player.changeAnimation("boom",boomI);
  }
  
  if(Nuker.isTouching(e_3))
  {
  e_3.changeAnimation("boom",boomI);
  e_3.lifetime=10;
  score = score+1;
}

if (e_4.isTouching(Player))
{
  e_4.changeAnimation("boom",boomI);
  gameState=0
  Player.changeAnimation("boom",boomI);
}

if(Nuker.isTouching(e_4))
{
e_4.changeAnimation("boom",boomI);
e_4.lifetime=10;
score = score+1;
}  

if (e_5.isTouching(Player))
  {
    e_5.changeAnimation("boom",boomI);
    gameState=0
    Player.changeAnimation("boom",boomI);
  }

  if(Nuker.isTouching(e_5))
  {
  e_5.changeAnimation("boom",boomI);
  e_5.lifetime=10;
  score = score+1;
}
if (e_6.isTouching(Player))
  {
    e_6.changeAnimation("boom",boomI);
    gameState=0
    Player.changeAnimation("boom",boomI);
  }

  if(Nuker.isTouching(e_6))
  {
  e_6.changeAnimation("boom",boomI);
  e_6.lifetime=10;
  score = score+1;
}
if (e_7.isTouching(Player))
  {
    e_7.changeAnimation("boom",boomI);
    gameState=0
    Player.changeAnimation("boom",boomI);
  }

  if(Nuker.isTouching(e_7))
  {
  e_7.changeAnimation("boom",boomI);
  e_7.lifetime=10;
  score = score+1;
}
  //spawn_enemy()
 }
  if(gameState===0)
  {
  
      go.visible=true;
      
  }

  if(Nuker.isTouching(e_8))
  {
    e_8.changeAnimation("boom",boomI);
    e_8.lifetime = 10;
    score = score+1;
  }

  if(Nuker.isTouching(e_9))
  {
    e_9.changeAnimation("boom",boomI);
    e_9.lifetime = 10;
    e_10.visible = true;
    e_10.velocityY = 10
    score = score+1;
  }

  if (Nuker.isTouching(e_9)) {
      p2.visible=true;
      p3.visible=true;
      n2.visible=true;
      n3.visible=true;   
  }

  if (Nuker.isTouching(e_10)) {
      e_10.changeAnimation("boom",boomI);
      e_10.lifetime = 10;
      score = score+1;
      levl2.visible = true;
      levl2.lifetime = 5;
    }

    if (Nuker.isTouching(l1)) {
        l1.changeAnimation("boom",boomI)
        l1.lifetime = 10;
        score = score+1;
    }
     
  push();
  noStroke();
  fill(255,255,0)
  text("Score : "+score,620,37)
  
  
  pop();
  SP()

  drawSprites();
  text("Winner")
 
}

function SP() {
  
  if(frameCount % 150===0 ) {
    Fe1 = createSprite(Math.round(random(600,1000),10,10));
    Fe1.addAnimation("plane",EnemyI);
    Fe1.addAnimation("boom",boomI);
    Fe1.scale = 0.5;
    Fe1.debug = true;
    Fe1.setCollider("circle",10,10);
    Fe1.velocityY = 2;
  }

}

