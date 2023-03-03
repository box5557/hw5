/* Q1
		Square Class
Create a square class defined by the following
	Property
	side
	Methods
	perimeter (side times 4)
	area (side squared)
	diagonal (square root of 2 * side squared, √(2*s^2 ))
	describe – shows the squares information as follows (assume side is 2):
Square with side 2 has perimeter of 8, area of 4, and diagonal of 2.828

Your program is to create three squares and use the describe method to show each squares information.


*/

class Square {
    constructor(side) {
      this.side = side;
    }
    perimeter() {
      return this.side * 4;
    }
    area() {
      return this.side ** 2;
    }
    diagonal() {
      return Math.sqrt(2 * this.side ** 2);
    }
    describe() {
      console.log("Square with side " + this.side + " has a perimeter of " + this.perimeter() + ", area of " + this.area() + ", and diagonal of " + this.diagonal().toFixed(3) + ".");
    }
  }


const square_01 = new Square(2);
const square_02 = new Square(10);
const square_03 = new Square(50);

square_01.describe();
square_02.describe();
square_03.describe();