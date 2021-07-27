var gameState="play"
var score=0

function preload(){


bgImg=loadImage("bg1.jpg")
rocketImg=loadImage("rocket1.png")
laserImg=loadImage("laser.png")
henImg=loadImage("hen 1.png")
eggImg=loadImage("egg1.png")
blastImg=loadImage("blastt.png")
winImg=loadImage("win.png")
winsound=loadSound("winsound.wav")
}


function setup() {
  createCanvas(1350,650);
  easterEgg=new Group()
  laserGroup=new Group()
  hen1=createSprite(50,100,50,50)
  hen1.addImage(henImg)
  hen1.scale=0.3
  if(gameState==="win"){
winsound.play()


  }

  hen2=createSprite(220,100,50,50)
  hen2.addImage(henImg)
  hen2.scale=0.3

  hen3=createSprite(390,100,50,50)
  hen3.addImage(henImg)
  hen3.scale=0.3

  hen4=createSprite(560,100,50,50)
  hen4.addImage(henImg)
  hen4.scale=0.3

  hen5=createSprite(730,100,50,50)
  hen5.addImage(henImg)
  hen5.scale=0.3

  hen6=createSprite(900,100,50,50)
  hen6.addImage(henImg)
  hen6.scale=0.3

  hen7=createSprite(1070,100,50,50)
  hen7.addImage(henImg)
  hen7.scale=0.3

  hen8=createSprite(1240,100,50,50)
  hen8.addImage(henImg)
  hen8.scale=0.3

  rocket=createSprite(627,554,30,30)
  rocket.addImage(rocketImg)
  rocket.scale=0.3
  rocket.debug=true



}

function draw() {
  background(bgImg); 
  textSize(25)
  fill("white")
  text("Hens killed:"+score,620,21 )

         
  if(gameState==="play"){

      
    
    rocket.x=mouseX
    if(keyDown("space")){

      lasers()
  
    }
    eggs()
    if(easterEgg.isTouching(rocket)){

gameState="end"


    }
    if(laserGroup.isTouching(hen1)){
      hen1.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen2)){
      hen2.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen3)){
      hen3.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen4)){
      hen4.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen5)){
      hen5.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen6)){
      hen6.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen7)){
      hen7.destroy()
      score=score+1
    }

    if(laserGroup.isTouching(hen8)){
      hen8.destroy()
      score=score+1
    }
    if(score===8){

gameState="win"

    }
  }
  if(gameState==="end"){
    imageMode (CENTER)
image(blastImg,rocket.x,rocket.y,200,200)
rocket.destroy()



  }

  if(gameState==="win"){
    imageMode(CENTER)
image(winImg,675,325,800,800)


  }

  
  
  drawSprites();
}
 function lasers(){
  laser=createSprite(800,300,30,30)
  laser.addImage(laserImg)
  laser.scale=0.3
  laser.x=rocket.x
  laser.y=rocket.y
  laser.velocityY=-30
  laser.depth=rocket.depth
  rocket.depth=rocket.depth+1
  laserGroup.add(laser)
}
function eggs(){

  if(frameCount%25===0){
    egg=createSprite(random(0,1350),400,30,30)
    egg.addImage(eggImg)
    egg.scale=0.1
    egg.velocityY=25
    egg.y=hen3.y
easterEgg.add(egg)

  }
  

}