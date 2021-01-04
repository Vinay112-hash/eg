
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1350, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof1=new roof(640,180,275,20);

	bob1=new bob(550,380,90);
	bob2=new bob(595,380,90);
	bob3=new bob(640,380,90);
	bob4=new bob(685,380,90);
	bob5=new bob(730,380,90);

	rope1=new rope(bob1.body,roof1.body,-90*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("yellow");


  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();


  drawSprites();
 
}



