const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(370,150,330,27);
  ball1 = new Ball(250,380);
  ball2 = new Ball(265,395);
 // ball2 = new Ball(310,410);
	//Create till ball5

	//console.log(ball1.ball)

  //Create rope objects
 // rope1 = new Rope(roof.body,ball1.body,-10);
 // rope2 = new Rope(roof.body,ball2.body,-5)
  //rope3 = new Rope(ball3.body,roof.body,0)
  //rope4 = new Rope(ball4.body,roof.body,50)
  //rope5 = new Rope(ball5.body,roof.body,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof.display();

 
  ball1.display();
  ball2.display();
  //ball3.display();
 // ball4.display();
  //ball5.display();


 // rope1.display();
  //rope2.display()
//  rope3.display()
//  rope4.display()
//  rope5.display()
  
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		//use apply force
	}
}