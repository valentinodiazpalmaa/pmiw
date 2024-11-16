class PantallaCreditos {
  constructor (){
    this.imagen = fondo;
  }
  dibujar() {
    image(fondo, 0, 0, width, height);
    stroke(0);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Pantalla de Créditos", width / 2, height / 2);
    textSize(28);
    text("Creadores: Valentino Diaz Palma y Luka Clausel", width / 2, height / 2 + 50);
  }
}
