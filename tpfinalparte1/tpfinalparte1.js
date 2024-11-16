// Valentino Diaz Palma 
// 121124/5
// Luka Clausel
//
let pantalla = 0; 
let imagenes = [];
let textos = [];
const totalPantallas = 22;
let decision7 = null;
let decision15 = null;
let decision18 = null;
let sonidos = {};

function preload() {
  for (let i = 0; i <= totalPantallas; i++) { 
    imagenes[i] = loadImage(`assets/Escena${i}.jpg`);
  }
  textos = loadStrings('assets/aventura.txt');

  sonidos = {
    alarma: loadSound('assets/Alarma.mp3'),
    EntradaAnimus: loadSound('assets/animus.mp3'),
    SalidaAnimus: loadSound('assets/Salidaanimus.mp3'),
    medieval: loadSound('assets/ciudadmedieval.mp3')
  };
}

function setup() {
  createCanvas(640, 480);
  for (let key in sonidos) {
    sonidos[key].setVolume(0.5);
  }
}

function draw() {
  background(255);
  mostrarImagen(pantalla);
  manejarSonido();

  if (pantalla >= 1 && pantalla <= totalPantallas) {
    if (pantalla !== 22) {
      mostrarTextoConRectangulo(20, 400, 400, 50, textos[pantalla - 1]);
    }
  }

  if (pantalla === 7 && decision7 === null) {
    dibujarBoton(100, 350, 200, 40, "Escapar Solo");
    dibujarBoton(350, 350, 200, 40, "Escapar con Amigos");
  } 
  else if (pantalla === 15 && decision15 === null) {
    dibujarBoton(100, 350, 200, 40, "Huir de Abstergo");
    dibujarBoton(350, 350, 200, 40, "Enfrentarse a los Guardias");
  }
  else if (pantalla === 18 && decision18 === null) {
    dibujarBoton(100, 350, 200, 40, "Enfrentarse Solo");
    dibujarBoton(350, 350, 200, 40, "Esperar más compañeros");
  }
  else if (pantalla === 22) { 
    dibujarBoton(540, 400, 80, 40, "Reiniciar"); 
    push();
    stroke(255); 
    strokeWeight(3);
    fill(184, 28, 24); 
    textSize(24);
    textAlign(CENTER, TOP);
    text("Gracias por ver", width / 2, 20);
    
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Valentino Diaz Palma", width / 2, height - 70); 
    text("Luka Clausel", width / 2, height - 50); 
    pop();
  }
  else if (pantalla === 0) { // Pantalla de inicio
    dibujarBoton(220, 300, 200, 40, "Inicio");
    dibujarBoton(220, 350, 200, 40, "Créditos");
  }
  else if (pantalla >= 1 && pantalla <= totalPantallas) {
    if (pantalla !== 7 && pantalla !== 15 && pantalla !== 18 && pantalla !== 22) {
      dibujarBoton(540, 400, 80, 40, "Continuar");
    }
  }
}

function mostrarImagen(pantalla) {
  if (pantalla >= 0 && pantalla <= totalPantallas) { 
    image(imagenes[pantalla], 0, 0, width, height);
  }
}

function manejarSonido() {
  if (pantalla === 4) {
    reproducirSonido('EntradaAnimus');
  } else if (pantalla === 15) {
    reproducirSonido('SalidaAnimus');
  } else if (pantalla === 5) {
    reproducirSonido('medieval');
  } else if (pantalla === 17 || pantalla === 18) {
    reproducirSonido('alarma')
  } else {
    detenerSonidos();
  }
}

function reproducirSonido(nombre) {
  for (let key in sonidos) {
    if (key === nombre) {
      if (!sonidos[key].isPlaying()) {
        sonidos[key].loop();
      }
    } else {
      sonidos[key].stop();
    }
  }
}

function detenerSonidos() {
  for (let key in sonidos) {
    sonidos[key].stop();
  }
}

function mostrarTextoConRectangulo(x, y, ancho, alto, texto) {
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);

  let tamTexto = alto * 0.3;
  textSize(tamTexto);
  textAlign(CENTER, CENTER);
  
  let palabras = texto.split(" ");
  let linea = "";
  let lineas = [];

  for (let i = 0; i < palabras.length; i++) {
    let tempLinea = linea + palabras[i] + " ";
    if (textWidth(tempLinea) > ancho) {
      lineas.push(linea);
      linea = palabras[i] + " ";
    } else {
      linea = tempLinea;
    }
  }
  lineas.push(linea);

  let espacioVertical = (alto - (lineas.length * tamTexto)) / 2;
  for (let i = 0; i < lineas.length; i++) {
    text(lineas[i], x + ancho / 2, y + espacioVertical + (i * tamTexto) + tamTexto / 2);
  }
}
function dibujarBoton(x, y, ancho, alto, texto) {
  fill(0, 0, 0, 200);
  stroke(255); 
  strokeWeight(2); 
  rect(x, y, ancho, alto);
  fill(255); 
  noStroke(); 
  textSize(15);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function mouseClicked() {
  if (pantalla === 0) {
    if (mouseX > 220 && mouseX < 420 && mouseY > 300 && mouseY < 330) { 
      pantalla = 1; 
    } else if (mouseX > 220 && mouseX < 420 && mouseY > 350 && mouseY < 380) { 
      pantalla = 22; 
    }
  } else if (pantalla === 7 || pantalla === 15 || pantalla === 18) {
    if (mouseX > 100 && mouseX < 300 && mouseY > 350 && mouseY < 390) {
      pantalla += 1; 
      manejarSonidoAlarma();
    } else if (mouseX > 350 && mouseX < 550 && mouseY > 350 && mouseY < 390) {
      pantalla += 2; 
      manejarSonidoAlarma();
    }
  }
  
  if (pantalla >= 1 && pantalla <= totalPantallas && !esPantallaConBoton(pantalla)) {
    if (mouseX > 540 && mouseX < 620 && mouseY > 400 && mouseY < 440) {
      if (esPantallaFinal(pantalla)) {
        pantalla = 22;
        sonidos.alarma.stop();
      } else {
        pantalla++;
      }
    }
  }

  if (pantalla === 22) {
    if (mouseX > 540 && mouseX < 620 && mouseY > 400 && mouseY < 440) { 
      pantalla = 0;
      sonidos.alarma.stop();
    }
  }

 
}

function esPantallaConBoton(pantalla) {
  return pantalla === 7 || pantalla === 15 || pantalla === 18 || pantalla === 22;
}

function esPantallaFinal(pantalla) {
  return pantalla === 8 || pantalla === 16 || pantalla === 19 || pantalla === totalPantallas;
}
