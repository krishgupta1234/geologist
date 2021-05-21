const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron,stone,sand;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,350);
  stone = new Stone(200,340);
sand = new Sand(400,350);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    sand.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();
}