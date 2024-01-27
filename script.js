'use strict';

const rectangle = {
  trueWidth: 0,
  trueHeight: 0,
  set width(w) {
    this.trueWidth = w;
  },
  set height(h) {
    this.trueHeight = h;
  },
  get square() {
    return this.trueWidth * this.trueHeight;
  },
  get perimetr() {
    return this.trueWidth + this.trueHeight;
  },
};

rectangle.width = 10;
rectangle.height = 10;

console.log(rectangle.square);
console.log(rectangle.perimetr);
