"use strict";
const a = prompt("Введите число");
const b = prompt("Введите другое число");

const min = (x, y) => {
  return x > y ? x : y;
};

console.log(min(a, b));
