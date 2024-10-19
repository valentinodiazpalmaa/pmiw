//Valentino Diaz Palma 
//121124/5
//Luka Clausel
//https://youtu.be/mDiHarjca6g
//
let pantalla = 1;
let imagenes = [];
let textos = [];
const totalPantallas = 22;
let decision7 = null;
let decision15 = null;
let decision18 = null;
let sonidos = {};

function preload() {
  for (let i = 1; i <= totalPantallas; i++) {
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
    dibujarBoton(270, 350, 100, 40, "Reiniciar");
    push();
    stroke(255); 
    strokeWeight(3);
    fill(184, 28, 24); 
    textSize(24);
    textAlign(CENTER, TOP);
    text("Gracias por ver", width / 2, 20);
    
    textSize(18);
    text("Valentino Diaz Palma", width / 2, height - 70);
    text("Luka Clausel", width / 2, height - 50);
    pop();
  }
  else if (pantalla >= 1 && pantalla <= totalPantallas) {
    if (pantalla !== 7 && pantalla !== 15 && pantalla !== 18 && pantalla !== 22) {
      dibujarBoton(540, 400, 80, 40, "Continuar");
    }
  }
}

function mostrarImagen(pantalla) {
  if (pantalla >= 1 && pantalla <= totalPantallas) {
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
    manejarSonidoAlarma(); 
    sonidos.SalidaAnimus.stop(); 
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
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function esBotonClickeado(boton) {
  return mouseX > boton.x && mouseY > boton.y && mouseX < boton.x + boton.ancho && mouseY < boton.y + boton.alto;
}

function mouseClicked() {
  if ([7, 15, 18].includes(pantalla)) {
    let boton1 = { x: 100, y: 350, ancho: 200, alto: 40 };
    let boton2 = { x: 350, y: 350, ancho: 200, alto: 40 };

    if (esBotonClickeado(boton1)) {
      pantalla += 1; 
      manejarSonidoAlarma();
    } else if (esBotonClickeado(boton2)) {
      pantalla += 2; 
      manejarSonidoAlarma();
    }
  }
  
  if (pantalla >= 1 && pantalla <= totalPantallas && ![7, 15, 18, 22].includes(pantalla)) {
    let botonContinuar = { x: 540, y: 400, ancho: 80, alto: 40 };

    if (esBotonClickeado(botonContinuar)) {
      if ([8, 16, 19, totalPantallas].includes(pantalla)) {
        pantalla = 22;
        sonidos.alarma.stop();
      } else {
        pantalla++;
      }
    }
  }

  if (pantalla === 22) {
    let botonReiniciar = { x: 270, y: 350, ancho: 100, alto: 40 };
    if (esBotonClickeado(botonReiniciar)) {
      pantalla = 1;
      sonidos.alarma.stop();
    }
  }

  if (pantalla !== 17 && pantalla !== 18) {
    sonidos.alarma.stop();
  }
}

function manejarSonidoAlarma() {
  if (pantalla === 17 || pantalla === 18) {
    if (!sonidos.alarma.isPlaying()) { 
      sonidos.alarma.setVolume(0.5);
      sonidos.alarma.loop();
    }
  } else {
    sonidos.alarma.stop();
  }
}
