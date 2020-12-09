
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4;
var roofObj;
var rope1,rope2,rope3,rope4;

function preload()
{
	//none
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObj = new Roof(300,500,300,30);

	bobObj1 = new Bob(310,200,20);
	bobObj2 = new Bob(360,200,20);
	bobObj3 = new Bob(410,200,20);
	bobObj4 = new Bob(460,200,20);

	rope1 = new Rope(bobObj1.body,roofObj.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObj2.body,roofObj.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObj3.body,roofObj.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObj4.body,roofObj.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  onKeyPressed();
  drawSprites();
	roofObj.display();
	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();

}

function onKeyPressed(){
	if(keyCode === UP_ARROW){
		Bodies.applyForce(bobObj1.body,bobObj2);
	}
}


