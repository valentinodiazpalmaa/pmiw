let pantalla = 1;
let imagenes = [];
let textos = [];
const totalPantallas = 21;
let decision7 = null;
let decision15 = null;
let decision18 = null;

function preload() {
  for (let i = 1; i <= totalPantallas; i++) {
    imagenes[i] = loadImage(`assets/Escena${i}.jpg`);
  }
  textos = loadStrings('assets/aventura.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  mostrarImagen(pantalla);
  
  if (pantalla >= 1 && pantalla <= totalPantallas) {
    mostrarTextoConRectangulo(20, 300, 600, 100, textos[pantalla - 1]);
  }

  if (pantalla === 7 && decision7 === null) {
    dibujarBoton(100, 400, 200, 40, "Escapar Solo");
    dibujarBoton(350, 400, 200, 40, "Escapar con Amigos");
  } 
  else if (pantalla === 15 && decision15 === null) {
    dibujarBoton(100, 400, 200, 40, "Huir de Abstergo");
    dibujarBoton(350, 400, 200, 40, "Enfrentarse a los Guardias");
  }
  else if (pantalla === 18 && decision18 === null) {
    dibujarBoton(100, 400, 200, 40, "enfrentarse solo");
    dibujarBoton(350, 400, 200, 40, "esperar más compañeros");
  }
  else if (pantalla >= 1 && pantalla <= totalPantallas) {
    if (pantalla !== 7 && pantalla !== 15 && pantalla !== 18) {
      dibujarBoton(540, 400, 80, 40, "Continuar");
    }
  }
}

function mostrarImagen(pantalla) {
  if (pantalla >= 1 && pantalla <= totalPantallas) {
    image(imagenes[pantalla], 0, 0, width, height);
  }
}

function mostrarTextoConRectangulo(x, y, ancho, alto, texto) {
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);

  let tamTexto = alto * 0.2;
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
  if (pantalla === 7 && decision7 === null) {
    let boton1 = { x: 100, y: 400, ancho: 200, alto: 40 };
    let boton2 = { x: 350, y: 400, ancho: 200, alto: 40 };

    if (esBotonClickeado(boton1)) {
      pantalla = 8;
      decision7 = "Escapar Solo";
    } else if (esBotonClickeado(boton2)) {
      pantalla = 9;
      decision7 = "Escapar con Amigos";
    }
  }

  if (pantalla === 15 && decision15 === null) {
    let boton1 = { x: 100, y: 400, ancho: 200, alto: 40 };
    let boton2 = { x: 350, y: 400, ancho: 200, alto: 40 };

    if (esBotonClickeado(boton1)) {
      decision15 = "huir";
      pantalla = 16;
    } else if (esBotonClickeado(boton2)) {
      decision15 = "enfrentarse";
      pantalla = 17;
    }
  }
  if (pantalla === 18 && decision18 === null) {
    let boton1 = { x: 100, y: 400, ancho: 200, alto: 40 };
    let boton2 = { x: 350, y: 400, ancho: 200, alto: 40 };

    if (esBotonClickeado(boton1)) {
      decision18 = "enfrentarse solo";
      pantalla = 19;
    } else if (esBotonClickeado(boton2)) {
      decision18 = "esperar compañeros";
      pantalla = 20;
    }
  }

  if (pantalla >= 1 && pantalla <= totalPantallas && pantalla !== 7 && pantalla !== 15 && pantalla !== 18) {
    let botonContinuar = { x: 540, y: 400, ancho: 80, alto: 40 };

    if (esBotonClickeado(botonContinuar)) {
      if (pantalla === 8) {
        pantalla = 1;
        decision7 = null;
        decision15 = null;
        decision18 = null;
      } else if (pantalla === 16) {
        pantalla = 1;
        decision7 = null;
        decision15 = null;
        decision18 = null;
      } else if (pantalla === 19) {
        pantalla = 1;
        decision7 = null;
        decision15 = null;
        decision18 = null;
      } else if (pantalla === totalPantallas) {
        pantalla = 1;
        decision7 = null;
        decision15 = null;
        decision18 = null;
      } else {
        pantalla++;
      }
    }
  }
}
