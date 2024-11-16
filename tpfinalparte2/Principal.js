class Principal {
  constructor() {
    this.Juego = new Juego(10, 3);
    this.pantallaInicio = new PantallaInicio();
    this.pantallaInstrucciones = new PantallaInstrucciones();
    this.pantallaGanar = new PantallaGanar();
    this.pantallaPerder = new PantallaPerder();
    this.pantallaCreditos = new PantallaCreditos();
  }
  dibujar() {
  if (pantallaActiva === 1) {
    this.pantallaInicio.dibujar();
  } else if (pantallaActiva === 2) {
    this.pantallaInstrucciones.dibujar();
  } else if (pantallaActiva === 3) {
    this.Juego.dibujar();
    this.Juego.verificarVictoria();
    this.Juego.verificarDerrota();

    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        this.Juego.barra.moverIzquierda();
      } else if (keyCode === RIGHT_ARROW) {
        this.Juego.barra.moverDerecha();
      }
    }
  } else if (pantallaActiva === 4) {
    this.pantallaGanar.dibujar();
  } else if (pantallaActiva === 5) {
    this.pantallaPerder.dibujar();
  } else if (pantallaActiva === 6) {
    this.pantallaCreditos.dibujar();
  }
}

 manejarClic() {
  if (pantallaActiva === 1) {
    this.reiniciarJuego();
    pantallaActiva = 2;  
  } else if (pantallaActiva === 2) {
    pantallaActiva = 3;  
  } else if (pantallaActiva === 4 || pantallaActiva === 5) {
    pantallaActiva = 6;  // Ir a la pantalla de créditos
  } else if (pantallaActiva === 6) {
    this.reiniciarJuego();
    pantallaActiva = 1;  // Volver al inicio
  }
}

  reiniciarJuego() {
    this.Juego = new Juego(10, 3);  
  }
}
