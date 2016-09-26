function setup() {
  createCanvas(500, 500);
  background(255);
  colorMode(HSB);
  var h=16;
  noStroke();
  
  for (var i = 20; i < width - 20; i = i + 35) {
    for (var n = 20; n < height - 20; n = n + 35) {
      fill(h, 100, 100);
      h = h + 1.5;
      ellipse(n, i, 30, 30);



    }

  }
}