let pantalla = 1;
let imagenes = [];

function preload() {
  for (let i = 1; i <= 6; i++) {
    imagenes[i] = loadImage(`assets/Escena${i}.jpg`);
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);

  if (pantalla >= 1 && pantalla <= 6) {
    image(imagenes[pantalla], 0, 0, width, height);
  }

  fill(255);
  rect(540, 400, 80, 40);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Continuar", 580, 420);
}

function mouseClicked() {
  if (mouseX > 540 && mouseY > 400 && mouseX < 620 && mouseY < 440) {
    pantalla++;
    if (pantalla > 6) {
      pantalla = 1;
    }
  }
}
