
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	var bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	bob4 = new Bob(470,550,40);
	bob2 = new Bob(310,550,40);
	bob1 = new Bob(230,550,40);
	bob5 = new Bob(550,550,40);
	bob3 = new Bob(390,550,40);

	roof = new Roof(390,100,600,30);

	rope1=new rope(bob1.body,roof.body,-bobDiameter*4, 0)
	rope2=new rope(bob2.body,roof.body,-bobDiameter*2, 0)
	rope3=new rope(bob3.body,roof.body,0, 0)
	rope4=new rope(bob4.body,roof.body,bobDiameter*2, 0)
	rope5=new rope(bob5.body,roof.body,bobDiameter*4, 0)

	



	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("grey");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-6,y:-1});

	}
}


