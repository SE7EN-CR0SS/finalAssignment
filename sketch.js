//get all "var"s ready
var MAX_SPEED = 7;
var DRAW_DISTANCE_THRESHOLD = 300
var lineGrayness = 18
var BG = 255

for (let i=0; i < 255; i++){
  let i = MAX_SPEED
}

//random function
  function mousePressed() {
  lineGrayness = random(1,400);
  DRAW_DISTANCE_THRESHOLD = random(100,300);
  MAX_SPEED = random(1,900)
  BG = random(1,255)
  }


var agents = [];

//Canvas create
function setup() {
  createCanvas(800, 600);
  background(205,185,184);
 
  for (let i = 0; i < 16; i++) {
    //create floating points
    createAgent(random(width), random(height));
  }
}


function draw() {

  for (let i = 0; i < agents.length; i++) {
    let a = agents[i];

    a.move();
    
    for (let j = i +1; j < agents.length; j++){
      let otherAgent = agents[j]
      
      //dist(x1,y1,x2,y2)
      let d = dist(a.x, a.y, otherAgent.x, otherAgent.y)
      
      
      if (d < DRAW_DISTANCE_THRESHOLD){
        
        let strokeColor = map(d, 200, DRAW_DISTANCE_THRESHOLD, 0, 255)
        
      stroke(strokeColor,lineGrayness)
      //draw lines between floating points
      line(a.x, a.y, otherAgent.x, otherAgent.y)
         
      }
    }
  }
}

//create dots
function createAgent(posX, posY) {
  
  let agent = {
    
    x: posX,
    y: posY,
    
    //give it random direction to move with
    dirX: random(-1, 1) * MAX_SPEED,
    dirY: random(-1, 1) * MAX_SPEED,
 

    move: function () {
      this.x += this.dirX;
      this.y += this.dirY;

      this.keepInBounds();
    },
    
    keepInBounds : function(){
      if (this.x < 0 || this.x > width){
        this.dirX *= -1;
      }
      if (this.y < 0 || this.y > height){
        this.dirY *= -1;
      }
    }
  };  
  
//make lines
agents.push(agent);}  

