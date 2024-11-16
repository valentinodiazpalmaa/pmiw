class PantallaInstrucciones {
  constructor (){
    this.imagen = fondo;
  }
  dibujar() {
    image(fondo, 0, 0, width, height);
    stroke(0);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Instrucciones", width / 2, height / 2);
    textSize(24);
    text("Usa las flechas izquierda y derecha para mover la barra", width / 2, height / 2 + 50);
    text("Haz clic para empezar a jugar", width / 2, height / 2 + 80);
  }
}
