'use strict';

const arr = [];

const newArr = arr => {
  const x = Math.floor(Math.random() * 11);
  arr.push(x);
  const y = arr.reduce((acc, init) => acc + init, 0);
  if (y < 50) {
    return newArr(arr);
  } else {
    return arr;
  }
};

console.log(newArr(arr));
