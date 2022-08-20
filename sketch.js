console.log('flower function');

  
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
 

  }


function draw(){
translate(frameCount % width, frameCount % height);
rotate(radians(frameCount));
noFill();
stroke(165,42,42,9);
rect(0,0, 75,75);

 
  }

  function mousePressed(){
    save('image.png');
  }
  

