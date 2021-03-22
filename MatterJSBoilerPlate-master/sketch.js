
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var sand1;



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
  ground=new Ground(400,450,800,50);
  hammer=new Hammer(20,100);
  stone=new Stone(20,300);
  rubber=new Rubber(100,300);

  sand1=new Sand(400,430,10);
	sand2=new Sand(420,400,10);
  sand3=new Sand(440,400,10);
  sand4=new Sand(460,400,10);
  sand5=new Sand(480,400,10);
  sand6=new Sand(500,400,10);
	sand7=new Sand(410,400,10);
  sand8=new Sand(430,400,10);
  sand9=new Sand(450,400,10);
  sand10=new Sand(470,400,10);
  sand11=new Sand(490,400,10);
}
function draw() {
  background("lightBlue");
  Engine.update(engine);
  ground.display();
  hammer.display();
  rubber.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
}