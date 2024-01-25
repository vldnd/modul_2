"use strict";

const getRandomNumber = (n, m) => {
  return Math.floor(Math.random() * (Math.abs(n - m) + 1)) + Math.min(n, m);
};

const getArrayWithRandomNumbers = (length, n, m) => {
  return new Array(length).fill(undefined).map(() => getRandomNumber(n, m));
};

console.log(getArrayWithRandomNumbers(10, 5, 1));
