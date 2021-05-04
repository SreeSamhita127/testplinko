const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Particle = [];
var plinko = [];
var divisions= [];
var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;
var gamestate = 'play';

function setup() {
    createCanvas(800,800);

    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    base = new Base(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,50));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,150));        
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,250));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,350));        
    }     
  }
  
  function draw() {
    background(0);  
    Engine.update(engine);

    textSize(30)
    fill("blue");
    text("Score : " + score, 20,20)
      
  
   for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
  }
   for (var s = 0; s < Particle.length; s++) {
    Particle[s].display();
  }
   for (var k = 0; k < divisions.length; k++){
       divisions[k].display();
  }

    drawSprites();
  }

  function mousePressed(){
    if(gamestate !== "end"){
      count++
      particle = new Particle1(mousex, 10, 10, 10);
    }
  }