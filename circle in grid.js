function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
 fill(255);
  for (var i =30; i < width - 15; i = i + 35) {
    for (var n = 30; n < height -15; n = n + 35) {
    
         ellipse(i,n,30,30)
      
    

    }

  }
}