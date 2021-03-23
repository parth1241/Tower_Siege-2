const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine,world;
function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,600,450,20);
    ss=new Hitter(200,350);
    sling=new SlingShot(ss.body,{x:200,y:350})
    box=new Box(602,550);
    box2=new Box(654,550);
    box3=new Box(706,550);
    box4=new Box(758,550);
    box5=new Box(810,550);
    box6=new Box(862,550);
    box7=new Box(914,550);
    box8=new Box(966,550);
    box9=new Box(627,500);
    box10=new Box(679,500);
    box11=new Box(731,500);
    box12=new Box(783,500);
    box13=new Box(835,500);
    box14=new Box(887,500);
    box15=new Box(939,500);
    box16=new Box(645,450);
    box17=new Box(706,450);
    box18=new Box(758,450);
    box19=new Box(810,450);
    box20=new Box(862,450);
    box21=new Box(914,450);
    box22=new Box(679,400);
    box23=new Box(731,400);
    box24=new Box(783,400);
    box25=new Box(835,400);
    box26=new Box(887,400);
    box27=new Box(706,350);
    box28=new Box(758,350);
    box29=new Box(810,350);
    box30=new Box(862,350);
    box31=new Box(731,300);
    box32=new Box(783,300);
    box33=new Box(835,300);
    box34=new Box(758,250);
    box35=new Box(810,250);
    box36=new Box(783,200);
}

function draw() {
  background(255,255,225);
  Engine.update(engine);
  
  fill("Blue");
  ss.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  fill("Black");
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill("cyan")
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("brown");
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  fill(236, 188, 180);
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  fill(61, 255, 61);
  box31.display();
  box32.display();
  box33.display();
  fill("Silver");
  box34.display();  
  box35.display();
  fill(255,215,0)
  box36.display();
  ground.display();
  sling.display();
  console.log("All is Working Fine!")
}
function mouseDragged(){
      Matter.Body.setPosition(ss.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
 sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
   sling.attach(ss.body);
  }
}