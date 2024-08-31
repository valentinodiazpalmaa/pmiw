//Valentino Diaz Palma
//https://youtu.be/vVdqMsAQb9Q
//121124/5
let imagen;
let numCuadrados = 15; 
let incrementoTamaño = 25; 
let color1;
let vel = 0;
let acc = 0.5;
let veloDeMovi = 1.0;
let posx, posy;

function preload() {
  imagen = loadImage("assets/imagen.jpg");
}

function setup() {
  createCanvas(800, 400);
  color1 = color(243, 88, 35);
  posx = 0;
  posy = 0;
}

function draw() {
  background(255);
  image(imagen, 0, 0, width / 2, height);
  replicarImagen();
  if (mouseIsPressed) {
    vel += acc;
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciarPrograma();
  }
  if (key === 'a') {
    posx -= 5;  
  }
  if (key === 'd') {
    posx += 5;  
  }
  if (key === 'w') {
    posy -= 5;  
  }
  if (key === 's') {
    posy += 5;  
  }
}

function replicarImagen() {
  for (let i = numCuadrados - 1; i >= 0; i--) {
    push();
    let posXInicial = 600 + veloDeMovi * (i + 1);
    translate(posXInicial, height / 2);
    rotate(radians(vel * (i + 1))); 
    
    for (let j = i; j >= 0; j--) {
      let tamaño = (j + 1) * incrementoTamaño;

      if (i % 2 === 0) {
        fill(color1);
      } else {
        let factor = map(i, 0, numCuadrados - 1, 0.1, 0.9); 
        let color2 = color(29 * factor, 166 * factor, 150 * factor);
        fill(color2);
      }
      
      rectMode(CENTER);
      rect(posx, posy, tamaño, tamaño);
    }
    
    pop();
  }
}

function reiniciarPrograma() {
  vel = 0;
  veloDeMovi = 1.0;
  posx = 0;
  posy = 0;
}
