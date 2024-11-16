class PantallaPerder {
  constructor (){
    this.imagen = fondo;
  }
  dibujar() {
    image(perdiste, 0, 0, width, height);
    stroke(0);
    fill(255,0,0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Has Perdido", width / 2, height / 2);
    textSize(32);
    text("Haz clic para ir a los creditos", width / 2, height / 2 + 50);
  }
}
