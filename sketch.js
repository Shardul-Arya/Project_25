const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine, world;
var paper, paperImage;
var dustbin1, dustbin2, dustbin3, dustbin, dustbinImage;
var ground;

function preload() {
	paperImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	var canvas = createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(715, 230, 10, 95);

	dustbin2 = new Dustbin(745, 275, 65, 10);

	dustbin3 = new Dustbin(775, 230, 10, 95);

	ground = new Ground(50, 290, 2500, 20);

	paper = new Paper(100, 100);

	dustbin = createSprite(745, 230, 50, 50);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.3

	keyPressed();

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(255);

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	paper.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:70,y:-65});
	}
}