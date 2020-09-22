class Pen {
    constructor(point, color, ink = 100) {
      this.point = point;
      this.color = color;
      this.ink = ink;
    }

    loseInk(quant) {
        this.ink -= quant;
      }
    
      sign() {
        this.loseInk(10);
        return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
      }

      wroteText(str) {
        this.loseInk(str.length);
        return `${str} | a caneta ${this.color} ficou com ${this.ink}% de tinta`;
      }
  }
  
  const myPen = new Pen (0.7, 'black');
  console.log(myPen) // Pen { point: 0.7, color: 'black', ink: 100 }
  
  const redPen = new Pen (1, 'red', 80);
  console.log(redPen); // Pen { point: 1, color: 'red', ink: 80 }

  const bluePen = new Pen (0.5, 'blue');
  console.log(bluePen);
  
  console.log(myPen.sign()); // 'I've signed a text with a black pen. charge: 90%'
  
  const str = "A paixão me pegou tentei escapar não consegui"
  console.log(redPen.wroteText(str));
  