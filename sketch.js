const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var ground2, ground3;
var stand1,stand2;
var ball, ball2;
var slingShot, shot2;
var block15, block16;
var c, a;
var polygon_img, score;
var gameState = "onSling";

function preload(){
  polygon_img=loadImage("Screenshot (62).png");
  over = loadImage("game-over-2720584_640.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,520,1600,260);
  ground2 = new Ground(510,1,1600,20);
  ground3 = new Ground(910,15,40,800);
  ground4 = new Ground(5,10,10,800);
  c = 5;
  a=0;
  
  //ground = new Ground()
  stand1 = new Stand(420,197,100,10);
  stand2 = new Stand(880,85,80,10);
  stand3 = new Stand(700,85,80,10);
  stand4 = new Stand(700,210,80,10);
   block1 = new Block(760,450,30,40);
  //console.log(block1);
   block2 = new Block(860,70,30,40);
   block3 = new Block(700,64,30,40);
   block4 = new Block(700,475,30,40);
   block5 = new Block(700,200,30,40);
   score = 0;
  //block6 = new Block(450,275,30,40);
  //block7 = new Block(480,275,30,40);
  //level two
 // block8 = new Block(330,235,30,40);
 // block9 = new Block(360,235,30,40);
 // block10 = new Block(390,235,30,40);
  //block11 = new Block(420,235,30,40);
  //block12 = new Block(450,235,30,40);
  //level three
 // block13 = new Block(360,195,30,40);
 // block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
 // block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  //blocks1 = new Block(640,175,30,40);
  //blocks2 = new Block(670,175,30,40);
 // blocks3 = new Block(700,175,30,40);
  //blocks4 = new Block(730,175,30,40);
 // blocks5 = new Block(760,175,30,40);
  //level two
  //blocks6 = new Block(670,135,30,40);
  //blocks7 = new Block(700,135,30,40);
//  blocks8 = new Block(730,135,30,40);
  //top
 // blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  

  slingShot = new Slingshot(this.ball,{x:100,y:200});
}
function draw() {
  background("SkyBlue"); 
  console.log(a);

  if(c===0){
    background(over);
    Matter.Body.setStatic(ground.body,isStatic=false);
    Matter.Body.setStatic(ground.body2,isStatic=false);
    Matter.Body.setStatic(ground.body3,isStatic=false);
    Matter.Body.setStatic(ground.body4,isStatic=false);
  }
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
 // textSize(20);
 // fill("lightyellow");
 // text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  ground4.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
 
  block2.display();
  block3.display();
 block4.display();
 block5.display();
 // block6.display();
 // block7.display();
 // fill("pink");
 // block8.display();
  //block9.display();
 // block10.display();
 // block11.display();
//  block12.display();
 // fill("turquoise");
 // block13.display();
 // block14.display();
  block15.display();
 // fill("grey");
  
  ground2.display();
  ground3.display();
  //fill("skyblue");
 // blocks1.display();
 // blocks2.display();
 // blocks3.display();
 // blocks4.display();
 // blocks5.display();
 // fill("turquoise");
 // blocks6.display();
 // blocks7.display();
 // blocks8.display();
  //fill("pink")
 // blocks9.display();
 // fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
slingShot.fly();
gameState="launched";
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(ball);
      c = c-1;
      gameState ="onSling";

  }
}