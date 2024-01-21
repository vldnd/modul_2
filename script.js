"use strict";

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i];
  }
  console.log(x);
  return Math.floor(x / arr.length);
};

console.log(getAverageValue(allСashbox));
