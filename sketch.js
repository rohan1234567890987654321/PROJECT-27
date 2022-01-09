

var stringobj1,stringobj2,stringobj3,stringobj4,stringobj5
var bobobj1,bobobj2,bobobj3,bobobj4, bobobj5
var roofobj
var world



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobj1 = new Bob(200,450,70)
	stringobj1 = new String1 (1200,650)
	roofobj = new Roof(width/2,-670,width,-20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



