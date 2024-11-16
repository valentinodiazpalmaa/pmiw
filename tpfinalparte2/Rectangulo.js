class Rectangulo {
  constructor(posX, posY) {
    this.posX = posX + 20;
    this.posY = posY;
    this.miColor = color(0, 191, 255);
    this.ancho = 50;
    this.alto = 20;
    this.vida = 1;
  }
  
  dibujar() {
    if (this.vida) {
      fill(this.miColor);
      rect(this.posX, this.posY, this.ancho, this.alto);
    }
  }
}
