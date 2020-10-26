var bullet,wall,gun ,gunImage;
var speed,weight,thickness;

function setup() {
  createCanvas(400,400);
  
  speed = random (223,321)
  weight = random(30,52)
  thickness= random(22,83)

  bullet = createSprite(10,200,50,20)
  wall = createSprite(350,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)

  gunImage = loadImage("gun.png");
  gun = createSprite(70,200,30,30);
  gun. addImage(gunImage);
  gun.scale = 0.4
}

function draw() {
  background(255,255,255); 
 
  bullet.velocityX=speed

  if(hasCollided(bullet,wall)){
  	bullet.velocityX = 0;
  	var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

  	if(damage<10){
  		wall.shapeColor=color(255,0,0)
  		textSize(20)
  		fill("black")
  		text("The wall is not very effective",70,80)
  	}

    
    if(damage>10){
    	wall.shapeColor=color(0,255,0);
    	textSize(20)
    	fill("black")
  		text("The wall is strong enough!",90,80);
    	
    }
  }
  drawSprites();
}
