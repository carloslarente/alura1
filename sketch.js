let cor;
let cor2;

function setup() {
 
  createCanvas(600, 600);
  background("white");
}

function draw() {
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  cor2 = color(random(0, 255), random(0, 255), random(0, 255));
  fill(cor);
  stroke(cor2);

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30, 45);
  }
}
