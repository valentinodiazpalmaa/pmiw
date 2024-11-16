
class Bola {
  constructor(barra, rectangulos) {
    this.posX = 200;
    this.posY = 340;
    this.velocidadX = random(2, 5) * (random() > 0.5 ? 1 : -1);
    this.velocidadY = -3;
    this.miColor = color(255, 0, 0);
    this.ancho = 20;
    this.alto = 20;
    this.imagen = shuriken;
    this.barra = barra;
    this.rectangulos = rectangulos;
  }

  dibujar() {
    image(this.imagen, this.posX - this.ancho / 2, this.posY - this.alto / 2, this.ancho, this.alto);
  }

  mover() {
    this.posX += this.velocidadX;  
    this.posY += this.velocidadY;  

    
    if (this.posX < this.ancho / 2 || this.posX > width - this.ancho / 2) {
      this.velocidadX *= -1;  
    }

    
    if (this.posY < this.alto / 2) {
      this.velocidadY *= -1;  
    }

    
    if (this.posY + this.alto / 2 >= this.barra.posY && 
        this.posY + this.alto / 2 <= this.barra.posY + this.barra.alto &&
        this.posX + this.ancho / 2 >= this.barra.posX && 
        this.posX - this.ancho / 2 <= this.barra.posX + this.barra.ancho) {
      this.velocidadY *= -1; 
    }

    
    for (let i = 0; i < this.rectangulos.length; i++) {
      if (this.rectangulos[i].vida &&
          this.posX > this.rectangulos[i].posX &&
          this.posX < this.rectangulos[i].posX + this.rectangulos[i].ancho &&
          this.posY > this.rectangulos[i].posY &&
          this.posY < this.rectangulos[i].posY + this.rectangulos[i].alto) {
        this.rectangulos[i].vida = 0;  
        this.velocidadY *= -1;  
      }
    }
  }
}
