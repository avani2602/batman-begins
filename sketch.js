const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var person, personImg;

function preload(){
    personImg = loadImage("images/Walking Frame/walking_1.png");
}

function setup(){
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    person = createSprite(250,400,50,200);
    person.addImage("walk",personImg);
    scale = 0.2;
    
}

function draw(){
    background(0);
    Engine.update(engine);

    drawSprites();
}   

