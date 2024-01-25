"use strict";

const getRandomNumber = (n, m) => {
  return Math.floor(Math.random() * (Math.abs(n - m) + 1)) + Math.min(n, m);
};

const getArrayWithRandomNumbers = (length, n, m, string) => {
  const max = Math.max(n, m);
  return new Array(length)
    .fill(undefined)
    .map(() => getRandomNumber(n, m))
    .map((init) => {
      if (string === "even" && init % 2 !== 0) {
        return init === max ? init - 1 : init + 1;
      } else if (string === "odd" && init % 2 !== 1) {
        return init === max ? init - 1 : init + 1;
      } else {
        return init;
      }
    });
};

console.log(getArrayWithRandomNumbers(10, 5, 1, "odd"));
