

class Juego {
  constructor(cantidadRectangulos, cantidadFilas) {
    this.cantidadRectangulos = cantidadRectangulos;
    this.cantidadFilas = cantidadFilas;
    this.crearRectangulos();
    this.barra = new Barra();
    this.bola = new Bola(this.barra, this.rectangulo);  
    this.gano = false;
    this.perder = false;
    this.imagen = fondo;
    this.verificarVictoria();
    this.verificarDerrota();
  }
   

  dibujar() {
    image(fondo, 0, 0, width, height);
    this.barra.dibujar();
    this.bola.dibujar();
    this.bola.mover();
    for (let j = 0; j < this.rectangulo.length; j++) {
      this.rectangulo[j].dibujar();
    }
  }

  crearRectangulos() {
    this.rectangulo = []; 
    for (let i = 0; i < this.cantidadFilas; i++) { 
      for (let j = 0; j < this.cantidadRectangulos; j++) { 
        let posX = j * 60; 
        let posY = i * 45 + 50; 
        this.rectangulo.push(new Rectangulo(posX, posY)); 
      }
    }
  }
    verificarVictoria() {
    this.gano = this.rectangulo.every(rect => rect.vida === 0);
    if (this.gano) {
      pantallaActiva = 4;  
    }
  }

  verificarDerrota() {
    if (this.bola.posY > height) {
      pantallaActiva = 5;  
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.barra.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.barra.moverDerecha();
    }
  }
}
