"use strict";

const getArrayWithRandomNumbers = (length) => {
  return new Array(length)
    .fill(undefined)
    .map(() => Math.floor(Math.random() * 100));
};

console.log(x(10));
