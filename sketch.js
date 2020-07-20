/*
 SPACE STORY.... The game is based on an inter-galactic story of how an evil lord kidnaps the princess of another planet named Fogg. The king announces a reward that whoever rescues the princess shall marry her. The captain (the player)of the kings army deccides to destroy the Evil lord once and for all. He goes on an adventure and destroys the huge armada of the LORD
and thus rescues the princess.
     */
/* 
 The variables in the first line are for the loading of various images.
 The variable  in the fourth line is for the gameState(s).
 The variables in the fifth line are for the various buttons used through out the game.
 Then there is for the sprites like captain (player) ship and enemy ships.
 Then are variables are for  creating groups for enemy ships.
 Then comes variables for bullets.
 Then lastly score.
 */
var back,caps,e1,e2,e3,e4,e5,li;
var cap,tal,kin,pri;
var las,dess,dese,le;
var gameState;
var start,story,s_back;
var l2;
var captain,enemy1,enemy2,enemy3,enemy4;
var bullet,bulg;
var e1g,e2g,e3g,e4g;
var score;


function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
/*
 In the setup function, game state menu is formed.
*/  
   gameState = "menu";
   captain = createSprite(displayWidth/2,displayHeight/1.2,50,50);
   captain.addImage('c',caps);
   
  if (gameState==="menu"){
    // var title=createElement('h1');
    // title.html("SPACE STORY");
    // title.position(displayWidth/7,displayHeight/9);
    
    
    start = createButton("Start");
    start.position(displayWidth/2.4,displayHeight/4);
    start.size(200,50);
    
    story = createButton("Story");
    story.position(displayWidth/2.4,displayHeight/3);
    story.size(200,50);
  }
  
  
  
/*
 Here groups are created
*/  
 
  e1g = createGroup();
  e2g = createGroup();
  e3g = createGroup();
  e4g = createGroup();
  e5g = createGroup();
  
/* 
  Here the boss ship is created and made invisible
*/   
 
 enemy5=createSprite(displayWidth/2,displayHeight/2,500,500);
 enemy5.addImage('e005',e5);
 e5g.add(enemy5);
 enemy5.visible=false;
  
  bulg = createGroup();
   
}

function preload(){
/*
 Here the images are loaded
*/ 
  
  // back = loadImage("SpaceShips/Space.jpg");
  caps = loadImage("SpaceShips/Cap.png");
  e1   = loadImage("SpaceShips/E1.png");
  e2   = loadImage("SpaceShips/E2.png");
  e3   = loadImage("SpaceShips/E3.png");
  e4   = loadImage("SpaceShips/E4.png");
  e5   = loadImage("SpaceShips/E5.png");
//  li   = loadImage("SpaceShips/Life.png");
  


 las  = loadSound('Sounds/Laser_Shoot.mp3');
  
 score = 0; 

  
  

}
function draw() {
/*
 Here the various levels are created in game states. The levels are 1,2,3,4 and 5.
*/   
  
  background("black");
  drawSprites();
  captain.x = mouseX;
  textSize(30);
  text("'Press 'Q' to quit game'",displayWidth/10,displayHeight-80);
  if (keyDown("q")){
   gameState="finish"; 
  }
  
  if (gameState==="menu"){
      textSize(150);
    fill("red");
    text("Space Story",displayWidth/5,displayHeight/6);
      }
  
 start.mousePressed(()=>{
   start.hide();
   story.hide();
   gameState="lev1intro";
})
  
 story.mousePressed(()=>{
   story.hide();
   start.hide();
   
   gameState="story";
 })
 
  if(gameState==="story"){
     
     textSize(40);
     fill("magenta");
     text("The Evil Talon had kidnapped the Princess of the planet of Fogg.",displayWidth/17.5,displayHeight/15);
     text("The King has announced that whosoever shall rescue the Princess",displayWidth/17.5,displayHeight/5);
     text("shall receive the Princess's hand in return. The Captain of the King's",displayWidth/17.5,displayHeight-525);
     text("army decided to fight the Evil Talon and defeat him once and for all.",displayWidth/17.5,displayHeight-425);
     text("So the Captain went off in a journey alone to save the Princess.",displayWidth/17.5,displayHeight-330);
     text("It took him 5 days of fighting to rescue the Princess and bring her ",displayWidth/17.5,displayHeight-225);
     text("home safely.",displayWidth/17.5,displayHeight-125);
    
     fill("red");
     textSize(35);
     text("'Press Space to Start Game'",displayWidth/1.75,displayHeight-80);
// After you read the story you are ready for the game. You press "space"
     if(keyDown("space")){
        gameState="lev1intro";
        }
     
  }
  
  
  
  
  
// Once space is clicked you are entering level one training 
  if(gameState==="lev1intro"){
   textSize(30);
   fill("red");
   text("This is your ship, Captain..Press Space to shoot",captain.x,captain.y-30);   
   
   for(var j = 50; j < displayHeight-250;j = j +100){
   for (var i = 200; i<displayWidth-200;i = i +100){
    enemy1 = createSprite(i,j,50,50);
    enemy1.addImage('e01',e1);
    enemy1.scale=0.75;
    e1g.add(enemy1);     
    }                                    
  }
   
// For shooting you press "space"    
  
   if(keyDown("SPACE")){
      
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play();
     bulg.add(bullet);
   } 
  
// the enmy ship is destroyed when a bullet/laser comes in contact with it    
   if (e1g.isTouching(bulg)){
   e1g.destroyEach(); 
   gameState="lev1";
   
   }   
      start.hide();
    
 }
  var rand = random(100,displayWidth-100)

  if(gameState==="lev1"){
    
     textSize(50);
     fill("grey");
     text("Score:"+score,displayWidth/17.5,displayHeight/10);
// In a -- no. of frame ccounts a new a enemy ship will be created.    
   if(frameCount%50===0) {
    enemy1=createSprite(rand,0,50,50);
    enemy1.addImage('e001',e1);
    enemy1.velocityY=random(2,10);
    e1g.add(enemy1);
    
  }
  if(keyDown("SPACE")){
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play('las1',las);
     bulg.add(bullet);
   } 
   if (e1g.isTouching(bulg)){
     e1g.destroyEach(); 
     score = score+30;
     
   }
// Once the score crosses a certain limit you will be sent to the next level   
    if (score>1000){
     gameState="lev2intro";
   }
  }
//  --------Lev2------ 
//  thescore will be displayed in the screen and the next level will be loaded
  if(gameState==="lev2intro"){
    textSize(100);
    text("LEVEL 1 : Score=>"+score,displayWidth/7,displayHeight/2);
     textSize(75);
    fill("yellow")
    text("Loading Level 2... Get ready...",displayWidth/7,displayHeight/1.5);
    
 if (frameCount%750===0){
   
   gameState="lev2";
}
  }
// In each new level a new enemy ship is created  
  if(gameState==="lev2"){
     textSize(50);
     fill("grey");
     text("Score:"+score,displayWidth/17.5,displayHeight/10);
 // In a -- no. of frame ccounts a new a enemy ship will be created.   
   if(frameCount%60===0){
    enemy1=createSprite(rand,0,50,50);
    enemy1.addImage('e001',e1);
    enemy1.velocityY=random(2,10);
    e1g.add(enemy1);
    }  
 // In a -- no. of frame ccounts a new a enemy ship will be created.
    if(frameCount%50===0){
  enemy2=createSprite(rand,0,50,50);
    enemy2.addImage('e002',e2);
    enemy2.velocityY=random(2,10);
    e2g.add(enemy2);
  }
  if(keyDown("SPACE")){
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play('las1',las);
     bulg.add(bullet);
   } 
 
// the enmy ship is destroyed when a bullet/laser comes in contact with it    
    if (e1g.isTouching(bulg)){
     e1g.destroyEach(); 
     score = score+30;
     
   }
  
// the enmy ship is destroyed when a bullet/laser comes in contact with it   
    if (e2g.isTouching(bulg)){
     e2g.destroyEach(); 
     score = score+40;
     
   }
   if (score>2500){
     gameState="lev3intro";
   }
  }
  
//   ------Lev3------
  
  if(gameState==="lev3intro"){
    textSize(100);
    text("LEVEL 1+2 : Score=>"+score,displayWidth/20,displayHeight/2);
     textSize(75);
    fill("yellow")
    text("Loading Level 3...Get Ready...",displayWidth/7,displayHeight/1.5);
    
 if (frameCount%750===0){
   
   gameState="lev3";
}
  }
  
  if(gameState==="lev3"){
     textSize(50);
     fill("grey");
     text("Score:"+score,displayWidth/17.5,displayHeight/10);
  // In a -- no. of frame ccounts a new a enemy ship will be created.   
   if(frameCount%40===0){
    enemy1=createSprite(rand,0,50,50);
    enemy1.addImage('e001',e1);
    enemy1.velocityY=random(2,10);
    e1g.add(enemy1);
    }  
  // In a -- no. of frame ccounts a new a enemy ship will be created.
    if(frameCount%50===0){
  enemy2=createSprite(rand,0,50,50);
    enemy2.addImage('e002',e2);
    enemy2.velocityY=random(2,10);
    e2g.add(enemy2);
  }
   // In a -- no. of frame ccounts a new a enemy ship will be created.
    if(frameCount%60===0){
    enemy3=createSprite(rand,0,50,50);
    enemy3.addImage('e003',e3);
    enemy3.velocityY=random(2,10);
    e3g.add(enemy3);
  }
     
  if(keyDown("SPACE")){
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play('las1',las);
     bulg.add(bullet);
   } 
  // the enmy ship is destroyed when a bullet/laser comes in contact with it
    if (e1g.isTouching(bulg)){
     e1g.destroyEach(); 
     score = score+30;
     
   }
  // the enmy ship is destroyed when a bullet/laser comes in contact with it
    if (e2g.isTouching(bulg)){
     e2g.destroyEach(); 
     score = score+40;
    }  
  // the enmy ship is destroyed when a bullet/laser comes in contact with it
    if (e3g.isTouching(bulg)){
     e3g.destroyEach(); 
     score = score+50;
      }
  
   if (score>4500){
     gameState="lev4intro";
   }
  }
  
//  ------Lev4----- 
  
   
  if(gameState==="lev4intro"){
    textSize(100);
    text("LEVEL 1+2+3 :",displayWidth/20,displayHeight/3);
    text("Score=>"+score,displayWidth/15,displayHeight/1.75);
     textSize(75);
    fill("yellow")
    text("Loading Level 4...Get Ready...",displayWidth/7,displayHeight/1.5);
    
 if (frameCount%750===0){
   
   gameState="lev4";
}
  }
  
  if(gameState==="lev4"){
    textSize(50);
     fill("grey");
     text("Score:"+score,displayWidth/17.5,displayHeight/10);
   // In a -- no. of frame ccounts a new a enemy ship will be created.    
   if(frameCount%40===0){
    enemy1=createSprite(rand,0,50,50);
    enemy1.addImage('e001',e1);
    enemy1.velocityY=random(2,10);
    e1g.add(enemy1);
    }  
  // In a -- no. of frame ccounts a new a enemy ship will be created.   
    if(frameCount%50===0){
  enemy2=createSprite(rand,0,50,50);
    enemy2.addImage('e002',e2);
    enemy2.velocityY=random(2,10);
    e2g.add(enemy2);
  }
    // In a -- no. of frame ccounts a new a enemy ship will be created.   
  if(frameCount%60===0){
    enemy3=createSprite(rand,0,50,50);
    enemy3.addImage('e003',e3);
    enemy3.velocityY=random(2,10);
    e3g.add(enemy3);
  }
    // In a -- no. of frame ccounts a new a enemy ship will be created.   
    if(frameCount%70===0){
    enemy4=createSprite(rand,0,50,50);
    enemy4.addImage('e004',e4);
    enemy4.velocityY=random(2,10);
    e4g.add(enemy4);
  }
    
  if(keyDown("SPACE")){
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play('las1',las);
     bulg.add(bullet);
   } 
      // the enmy ship is destroyed when a bullet/laser comes in contact with it
   if (e1g.isTouching(bulg)){
     e1g.destroyEach(); 
     score = score+30;
     
   }
      // the enmy ship is destroyed when a bullet/laser comes in contact with it
  if (e2g.isTouching(bulg)){
     e2g.destroyEach(); 
     score = score+40;
    }  
      // the enmy ship is destroyed when a bullet/laser comes in contact with it
  if (e3g.isTouching(bulg)){
     e3g.destroyEach(); 
     score = score+50;
      }
      // the enmy ship is destroyed when a bullet/laser comes in contact with it
  if (e4g.isTouching(bulg)){
     e4g.destroyEach(); 
     score = score+60;
    }
  
  
   if (score>7000){
     gameState="lev5intro";
   }
  }
  
//   ------Lev5-------
  
  if(gameState==="lev5intro"){
    textSize(100);
    text("LEVEL 1+2+3+4 :",displayWidth/20,displayHeight/3);
    text("Score=>"+score,displayWidth/15,displayHeight/1.75);
     textSize(75);
    fill("yellow")
    text("Loading Level 5...Get Ready...",displayWidth/7,displayHeight/1.5);
    
 if (frameCount%750===0){
   
   gameState="lev5";
}
  }
  
  if(gameState==="lev5"){
     textSize(50);
     fill("grey");
     text("Score:"+score,displayWidth/17.5,displayHeight/10);
    
  // In a -- no. of frame ccounts a new a enemy ship will be created.   
   if(frameCount%40===0){
    enemy1=createSprite(rand,0,50,50);
    enemy1.addImage('e001',e1);
    enemy1.velocityY=random(2,10);
    e1g.add(enemy1);
    }  
    // In a -- no. of frame ccounts a new a enemy ship will be created. 
  if(frameCount%50===0){
  enemy2=createSprite(rand,0,50,50);
    enemy2.addImage('e002',e2);
    enemy2.velocityY=random(2,10);
    e2g.add(enemy2);
  }
    // In a -- no. of frame ccounts a new a enemy ship will be created. 
  if(frameCount%60===0){
    enemy3=createSprite(rand,0,50,50);
    enemy3.addImage('e003',e3);
    enemy3.velocityY=random(2,10);
    e3g.add(enemy3);
  }
    // In a -- no. of frame ccounts a new a enemy ship will be created. 
    if(frameCount%70===0){
    enemy4=createSprite(rand,0,50,50);
    enemy4.addImage('e004',e4);
    enemy4.velocityY=random(2,10);
    e4g.add(enemy4);
  }
    // In a -- no. of frame ccounts a new a enemy ship will be created. 
  if(keyDown("SPACE")){
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play('las1',las);
     bulg.add(bullet);
   } 
     // the enmy ship is destroyed when a bullet/laser comes in contact with it
   if (e1g.isTouching(bulg)){
     e1g.destroyEach(); 
     score = score+30;
     
   }
     // the enmy ship is destroyed when a bullet/laser comes in contact with it
  if (e2g.isTouching(bulg)){
     e2g.destroyEach(); 
     score = score+40;
    }  
     // the enmy ship is destroyed when a bullet/laser comes in contact with it
  if (e3g.isTouching(bulg)){
     e3g.destroyEach(); 
     score = score+50;
      }
     // the enmy ship is destroyed when a bullet/laser comes in contact with it
  if (e4g.isTouching(bulg)){
     e4g.destroyEach(); 
     score = score+60;
    }
  
  
   if (score>8500){
     gameState="final";
   }
  } 
   if (gameState==="final"){ 
    enemy5.visible=true;
// In this game state the boss ship is made visible and the boss ship has some teleportation powers.      
    if (frameCount%25===0){
    enemy5.x=random(10,1000);
    enemy5.y=random(10,1000);
        }
   
    if(keyDown("SPACE")){           
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     bullet.play('las1',las);
     bulg.add(bullet);
   } 
      if (e5g.isTouching(bulg)){
     e5g.destroyEach(); 
     score = score+2000;
     gameState="finished";
    }
   
   }  
  
/*
 Here the endings of the game in two ways - by pressing quit and by 
 finishing the game,is done
*/  
  
  
  if (gameState==="finish"){
      
      textSize(50);
      fill("red");
      text("GAME OVER",displayWidth/2.5,displayHeight/2);
      fill("orange");
      text("Score:"+score,displayWidth/2.5,displayHeight/1.75);
      
    }
  
  if (gameState==="finished"){
      textSize(50);
      fill("white");
      text("Congratulations you saved the Princess",displayWidth/4,displayHeight/2 );
      text("Score:"+score,displayWidth/4,displayHeight/1.75);
      }
  
  
 
 }  
     
/*
 Here i finish my fist game ever.
 Thank you Vidya ma'am and Subashini ma'am
*/   
  
 
