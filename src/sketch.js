var bird;
var pipes=[];
function setup() {
  // put setup code here
  createCanvas(400,600);
  bird=new bird();
  pipes.push(new pipe());
}

function draw() {
  // put drawing code here
  background(0);
  bird.update();
  bird.show();  

  for(var i=pipes.length-1;i>=0;i--){
    pipes[i].update();
    pipes[i].show();
    if(pipes[i].ofScreen()){
      pipes=pipes.slice(i+1);
    }
  }

  if(frameCount%200==0){
    pipes.push(new pipe());
  }
}

function keyPressed(){  
  bird.up();  
}