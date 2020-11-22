const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var phyeng,myworld;
var ground;
var physicsengine;


function setup() {
  createCanvas(400,400);     
  
    phyeng  =  Engine.create();      //          phyeng.world
    myworld = phyeng.world;

var options = {
  isStatic : true,
 
}
var OPTIONS = {
  restitution : 2

}
    ground = Bodies.rectangle(200,350,400,10,options)
    World.add(myworld,ground);

    physicsengine = Bodies.circle(100,100,30,OPTIONS)
    World.add(myworld,physicsengine);
    console.log(physicsengine);
    
}

function draw() {
  Engine.update(phyeng)
  background(0);  
rectMode(CENTER)
  rect(200,200,80,80)
  rect(ground.position.x,ground.position.y,400,10)
ellipseMode(RADIUS)
  ellipse(physicsengine.position.x,physicsengine.position.y,30,30)
  drawSprites();
}