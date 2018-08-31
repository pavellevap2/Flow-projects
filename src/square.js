class Square {
  perimetr: number;
  area: number;

  constructor(side: number) {
    this.side = side;
  }

  countArea() {
    this.area = this._toArea(this.side);

    return this.area;
  }

  countPerimetr() {
    this.perimetr = this._toPerimetr(this.side);

    return this.perimetr;
  }

  _toArea(side: number) {
    return side * side;
  }

  _toPerimetr(side: number) {
    return 4 * side;
  }
}

let Test: Square = new Square(2);

console.log(Test.countArea());
console.log(Test.countPerimetr());

let Loos: Square = new Square("55");

console.log(Loos.countArea());
