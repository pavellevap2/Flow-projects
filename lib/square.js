class Square {

  constructor(side) {
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

  _toArea(side) {
    return side * side;
  }

  _toPerimetr(side) {
    return 4 * side;
  }
}

let Test = new Square(2);

console.log(Test.countArea());
console.log(Test.countPerimetr());

let Loos = new Square("55");

console.log(Loos.countArea());