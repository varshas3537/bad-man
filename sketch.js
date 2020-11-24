const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sandy, startupbox, engine, world, hanger, constrainta;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1800,1400);
  sandy = new sprite(400, 200, 20, 20);
  startupbox = new Ground(400, 250, 80, 10);
 hanger = new Ground(500, 150, 30, 30);
 constrainta = new constraint(sandy.body, hanger.body)
 //roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("black");  
  sandy.display();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  startupbox.display();
  hanger.display();
  constrainta.display();
    drawSprites();
}