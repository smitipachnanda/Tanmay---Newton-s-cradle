
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5, bob5
var roof
var chain, chain1


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.  
   
    roof = new Roof()

    bob1 = new Bob(100,300) 
    bob2 = new Bob(160,300)
    bob3 = new Bob(220,300)
    bob4 = new Bob(280,300)
    bob5 = new Bob(340,300)
  
    chain = new Chain(bob1.body,roof.body,-100, 0)  
    chain1 = new Chain(bob2.body,roof.body,-40, 0)
    chain2 = new Chain(bob3.body,roof.body,0, 0)
    chain3 = new Chain(bob4.body,roof.body,40, 0)
    chain4 = new Chain(bob5.body,roof.body,80, 0)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER)
  background(220);
 
  
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  
  drawSprites();
 
}
function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-50})

}

}