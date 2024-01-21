"use strict";

const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = ([...arr]) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    let [key, value] = arr[i];
    // console.log(key, value);
    x += value / key;
    // console.log(x);
  }

  return Math.floor(x / arr.length);
};

console.log(getAveragePriceGoods(allСashbox));
