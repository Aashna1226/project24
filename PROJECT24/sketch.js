var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(650,600, 2);
	dusb1 = new Dustbin(470, 670, 15, 50);
	dusb2 = new Dustbin(330, 670, 15, 50);
	dusb3 = new Dustbin(width/2, 670, 115, 10);

	groundSprite=createSprite(width/2, height-35, width, 10);
	ground.shapeColor= color(0);

	paper.shapeColor= color(255);
	dusb1.shapeColor=color(255,0,0);
	dusb2.shapeColor=color(255,0,0);
	dusb3.shapeColor=color(255,0,0);;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  paper.display();
  dusb1.display();
  dusb2.display();
  dusb3.display();

  drawSprites();
 
}



