class PantallaInicio {
  constructor (){
    this.imagen = fondo;
  }
  dibujar() {
    image(fondo, 0, 0, width, height);
    stroke(0);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Pantalla de Inicio", width / 2, height / 2);
    textSize(20);
    text("Toca una tecla para empezar con sonido, toca click para continuar", width / 2, height / 2 + 50);
  }
}
