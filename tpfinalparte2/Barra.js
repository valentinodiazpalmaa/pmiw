
class Barra {
  constructor() {
    this.posX = 270;
    this.posY = 400;
    this.miColor = color(156, 156, 156);
    this.ancho = 100;
    this.alto = 10;
  }
  
  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, this.ancho, this.alto);
  }

  moverIzquierda() {
    if (this.posX > 10) {
      this.posX -= 10; 
    } 
  }

  moverDerecha() {
    if (this.posX + this.ancho < width - 10) {
      this.posX += 10;
    }
  }
}

  
