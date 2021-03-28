const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload(){

  get_time()
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 375, 800, 50)
  stand1 = new Ground(200, 200, 200, 50)
  stand2 = new Ground(600, 150, 200, 50)

  
  
  block1 = new Box(560, 105, 30, 40)
  block2 = new Box(590, 105, 30, 40)
  block3 = new Box(620, 105, 30, 40)
  block4 = new Box(650, 105, 30, 40)
  block5 = new Box(680, 105, 30, 40)
  block6 = new Box(590, 65, 30, 40)
  block7 = new Box(620, 65, 30, 40)
  block81 = new Box(650, 65, 30, 40)
  block91 = new Box(620, 5, 30, 40)


  block8 = new Box(140, 135, 30, 40)
  block9 = new Box(170, 135, 30, 40)
  block10 = new Box(200, 135, 30, 40)
  block11 = new Box(230, 135, 30, 40)
  block12 = new Box(260, 135, 30, 40)
  block13 = new Box(170, 95, 30, 40)
  block14 = new Box(200, 95, 30, 40)
  block15 = new Box(230, 95, 30, 40)
  block16 = new Box(200, 55, 30, 40)
  //block17 = new Box(360, 235, 30, 40)
  //block18 = new Box(330, 235, 30, 40)
  //block19 = new Box(360, 235, 30, 40)
  striker = new Striker(400, 200, 50, 50)
  sling = new SlingShot(striker.body, {x: 400, y: 180})
  


}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  ground.display()
  stand1.display()
  stand2.display()
 // block1.display()
 block1.display()
 //block8.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block81.display()
 block91.display()
  
 
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  striker.display()
  
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}



function keyPressed(){
  if(keyCode === 32){

      sling.attach(striker.body)
  }

}


async function get_time(){

  var response = await fetch('http://worldclockapi.com/api/json/est/now')
  var responseJSON = await response.json()
  var datetime = responseJSON.currentDateTime
  var hour = 20
  //console.log(responseJSON)
  if(hour >=05 && hour <= 18){

      bg = 'bg.png'

  }
  else{

      bg = 'BACKGROUND.jpg'
  }

  backgroundImg = loadImage(bg)

}