const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2;
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,150,50,50);
    box1.shapecolor="blue"
    box2=new Box(200,50,50,100);
    box2.shapecolor="blue";

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
}