var sw1, sw2, sw3, sw4;
var wall1, wall2, wall3, wall4;
var car1, car2, car3, car4, car1i, car2i, car3i, car4i;
var tc;
var speed, weight;


function preload(){
  car1i = loadImage("obci1.png");
  car2i = loadImage("obci2.png");
  car3i = loadImage("obci3.png");
  car4i = loadImage("obci4.png");
}

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400, 1500);

  tc = createSprite(200,200, 50,20);
  
  sw1 = createSprite(700, 200, 1500, 10);
  sw1.shapeColor=("white");
  sw2 = createSprite(700, 100, 1500, 10);
  sw2.shapeColor=("white");
  sw3 = createSprite(700, 300, 1500, 10);
  sw3.shapeColor=("white");

  wall1 = createSprite(1300, 250, 20, 60);
  wall2 = createSprite(1300, 150, 20, 60);
  wall3 = createSprite(1300, 350, 20, 60);
  wall4 = createSprite(1300, 50, 20, 60);

  car1 = createSprite(100, 50, 40, 20);
  car1.addImage("ci1", car1i);
  car1.scale = 0.2;
  car2 = createSprite(100, 150, 40, 20);
  car2.addImage("ci1", car2i);
  car2.scale = 0.4;
  car3 = createSprite(100, 250, 40, 20);
  car3.addImage("ci1", car3i);
  car3.scale = 0.6;
  car4 = createSprite(100, 350, 40, 20);
  car4.addImage("ci1", car4i);
  car4.scale = 1.1;
  
}

function draw() {
  background("black");  

  //Text("hello",250,400);
  

  tc.x = World.mouseX;
  tc.y = World.mouseY;

  //if(keyDown("right")){
    car1.velocityX = random(10, 15);
  //}
  //if(keyDown("right")&&car1.isTouching(wall4)){
    car2.velocityX = random(10, 15);
  //}
  //if(keyDown("right")&&car2.isTouching(wall2)){
    car3.velocityX = random(10, 15);
  //}
  //if(keyDown("right")&&car3.isTouching(wall1)){
    car4.velocityX = random(10, 15);
  //}
  

  if(car1.isTouching(wall4)){
    car1.velocityX = 0;
    var deformation1 = 0.5*weight*speed*speed/22509;
    
    if(deformation1<100){
      wall4.shapeColor =("green");
    }
    if(deformation1<180 && deformation1>100){
      wall4.shapeColor = ("yellow");
    }
    if(deformation1>180){
      wall4.shapeColor = ("red");
    }
  }
  if(car2.isTouching(wall2)){
    car2.velocityX = 0;
    var deformation2 = 0.5*weight*speed*speed/22509;
    
    if(deformation2<100){
      wall2.shapeColor =("green");
    }
    if(deformation2<180 && deformation2>100){
      wall2.shapeColor = ("yellow");
    }
    if(deformation2>180){
      wall2.shapeColor = ("red");

      //var defRec = deformation;

      //console.log("defRec");

      
    }
  }
  if(car3.isTouching(wall1)){
    car3.velocityX = 0;
    var deformation3 = 0.5*weight*speed*speed/22509;
    
    if(deformation3<100){
      wall1.shapeColor =("green");
    }
    if(deformation3<180 && deformation3>100){
      wall1.shapeColor = ("yellow");
    }
    if(deformation3>180){
      wall1.shapeColor = ("red");
    }
  }
  if(car4.isTouching(wall3)){
    car4.velocityX = 0;
    var deformation4 = 0.5*weight*speed*speed/22509;
    
    if(deformation4<100){
      wall3.shapeColor =("green");
    }
    if(deformation4<180 && deformation4>100){
      wall3.shapeColor = ("yellow");
    }
    if(deformation4>180){
      wall3.shapeColor = ("red");
    }
  }

  drawSprites();
}
