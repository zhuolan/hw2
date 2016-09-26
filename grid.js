function setup() {
  createCanvas(500, 500);
  background(100);
}

function draw() {
 stroke(255);
  for (var i = 20; i <= width-20 ; i = i + 10) {
    for (var n = 20; n <= height-20; n = n + 10) {
    
          line(20,n,480,n );
      line (i,20,i,480);
    

    }

  }
}