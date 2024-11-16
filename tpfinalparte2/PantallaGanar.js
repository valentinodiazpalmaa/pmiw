class PantallaGanar {
  constructor (){
    this.imagen = fondo;
  }
  dibujar() {
    image(ganaste, 0, 0, width, height);
    stroke(0);
    fill(0,255,0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("¡Has Ganado!", width / 2, height / 2);
    textSize(24);
    text("Haz clic para ir a los creditos", width / 2, height / 2 + 50);
  }
}
