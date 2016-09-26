function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {

  for (var i = 0; i < width - 30; i = i + 35) {
    for (var n = 0; n < height - 30; n = n + 35) {
      var a = random(255);
      var b = random(255);
      var c = random(255);
      colorMode(HSB, 255, 0, 0);
      stroke(a, b, c);
      fill(a, b, c);
      var d = random(25);
      var e = random(150);
      var f = random(150);
      ellipse(i, n, 30, 30);
noLoop()
    }

  }

}