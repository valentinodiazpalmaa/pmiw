
let pantalla = 1;
let imagenes = [];
let textos = []; // Arreglo para manejar el texto por pantalla
const totalPantallas = 20;
let decisionTomada = false;
let decision15 = null;// Variable para almacenar la decisión en la pantalla 15
let decision17 = null;

function preload() {
  // Cargar imágenes
  for (let i = 1; i <= totalPantallas; i++) {
    imagenes[i] = loadImage(`assets/Escena${i}.jpg`);
  }
  // Cargar textos desde el archivo aventura.txt
  textos = loadStrings('assets/aventura.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  mostrarImagen(pantalla);
  
  // Mostrar texto con rectángulo debajo, ajustando tamaño y posición para cada pantalla
  if (pantalla >= 1 && pantalla <= totalPantallas) {
    mostrarTextoConRectangulo(20, 300, 600, 100, textos[pantalla - 1]); // Restamos 1 porque los índices empiezan en 0
  }

  // Si estamos en la escena 7 y no se ha tomado una decisión
  if (pantalla === 7 && !decisionTomada) {
    dibujarBoton(100, 400, 200, 40, "Escapar Solo");
    dibujarBoton(350, 400, 200, 40, "Escapar con Amigos");
  } 
  // Si estamos en la escena 15 y no se ha tomado una decisión
  else if (pantalla === 15 && decision15 === null) {
    dibujarBoton(100, 400, 200, 40, "Huir de Abstergo");
    dibujarBoton(350, 400, 200, 40, "Enfrentarse a los Guardias");
  }
  else if (pantalla === 17 && decision17 === null) { // Nueva lógica para la pantalla 17
    dibujarBoton(100, 400, 200, 40, "enfrentarse solo");
    dibujarBoton(350, 400, 200, 40, "esperar más compañeros");
  }
  // Continuar con la lógica de los demás pantallas
  else if (pantalla >= 1 && pantalla <= totalPantallas) {
    if (pantalla !== 7 && pantalla !== 15 && pantalla !== 17) {
      dibujarBoton(540, 400, 80, 40, "Continuar");
    }
  }
}

// Función para mostrar imágenes
function mostrarImagen(pantalla) {
  if (pantalla >= 1 && pantalla <= totalPantallas) {
    image(imagenes[pantalla], 0, 0, width, height);
  }
}

// Función para mostrar texto con un rectángulo debajo
function mostrarTextoConRectangulo(x, y, ancho, alto, texto) {
  fill(255); // Color del rectángulo
  rect(x, y, ancho, alto); // Dibuja el rectángulo con los parámetros
  fill(0); // Color del texto

  // Ajustar tamaño del texto
  let tamTexto = alto * 0.2; // Ajusta el tamaño del texto en relación con la altura del rectángulo
  textSize(tamTexto);
  textAlign(CENTER, CENTER);
  
  // Dividir el texto en líneas si es muy largo
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
  lineas.push(linea); // Agregar la última línea

  // Dibujar el texto en el rectángulo
  let espacioVertical = (alto - (lineas.length * tamTexto)) / 2; // Espacio vertical para centrar el texto
  for (let i = 0; i < lineas.length; i++) {
    text(lineas[i], x + ancho / 2, y + espacioVertical + (i * tamTexto) + tamTexto / 2);
  }
}

// Función para dibujar botones con parámetros
function dibujarBoton(x, y, ancho, alto, texto) {
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

// Función para verificar si el botón fue clickeado
function esBotonClickeado(boton) {
  return mouseX > boton.x && mouseY > boton.y && mouseX < boton.x + boton.ancho && mouseY < boton.y + boton.alto;
}

function mouseClicked() {
  // Lógica para la pantalla 7
  if (pantalla === 7 && !decisionTomada) {
    let boton1 = { x: 100, y: 400, ancho: 200, alto: 40 };
    let boton2 = { x: 350, y: 400, ancho: 200, alto: 40 };

    if (esBotonClickeado(boton1)) {
      pantalla = 8; // Cambiar a la pantalla 8
      decisionTomada = true; // Marcar que se tomó una decisión
    } else if (esBotonClickeado(boton2)) {
      pantalla = 9; // Cambiar a la pantalla 9
      decisionTomada = true; // Marcar que se tomó una decisión
    }
  }

  // Lógica para la pantalla 15
  if (pantalla === 15 && decision15 === null) {
    let botonHuir = { x: 100, y: 400, ancho: 200, alto: 40 };
    let botonEnfrentarse = { x: 350, y: 400, ancho: 200, alto: 40 };

    if (esBotonClickeado(botonHuir)) {
      decision15 = "huir"; // Guardamos la decisión
      pantalla = 16; // Cambiamos a la pantalla 16
    } else if (esBotonClickeado(botonEnfrentarse)) {
      decision15 = "enfrentarse"; // Guardamos la decisión
      pantalla = 17; // Cambiamos a la pantalla 17
    }
  }
  if (pantalla === 17 && decision17 === null) { // Nueva lógica para la pantalla 17
    let botonEnfrentarseSolo = { x: 100, y: 400, ancho: 200, alto: 40 };
    let botonEsperarCompaneros = { x: 350, y: 400, ancho: 200, alto: 40 };

    if (esBotonClickeado(botonEnfrentarseSolo)) {
      decision17 = "enfrentarse solo"; // Guardamos la decisión
      pantalla = 18; // Cambiamos a la pantalla 18
    } else if (esBotonClickeado(botonEsperarCompaneros)) {
      decision17 = "esperar compañeros"; // Guardamos la decisión
      pantalla = 19; // Cambiamos a la pantalla 19
    }
  }
  // Lógica para el botón de continuar en otras pantallas
  if (pantalla >= 1 && pantalla <= totalPantallas && pantalla !== 7 && pantalla !== 15 && pantalla !== 17) {
    let botonContinuar = { x: 540, y: 400, ancho: 80, alto: 40 };

    if (esBotonClickeado(botonContinuar)) {
      if (pantalla === 8) {
        pantalla = 1; // Regresar a la pantalla 1 después de la muerte de Callum
        decisionTomada = false; // Reiniciar la decisión de la pantalla 7
        decision15 = null;
        decision17 = null;
      } else if (pantalla === 16) {
        pantalla = 1; // Regresar a la pantalla 1 después de la muerte de Callum
        decisionTomada = false; // Reiniciar la decisión de la pantalla 7
        decision15 = null; // Reiniciar la decisión de la pantalla 15
        decision17 = null;
      } else if (pantalla === totalPantallas) {
        pantalla = 1; // Regresar a la pantalla 1
        decisionTomada = false; // Reiniciar la decisión de la pantalla 7
        decision15 = null;
        decision17 = null;
      } else {
        pantalla++; // Avanza a la siguiente pantalla
      }
    }
  }
}
