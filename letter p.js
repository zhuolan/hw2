function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  stroke(255);
  for (var i = 20; i < width - 10; i = i + 10) {
    for (var n = 20; n < height - 10; n = n + 10) {

      line(i, n, n, i);
    }

  }
  noStroke();
  textSize(400);
  text("P", 120, 380)
}