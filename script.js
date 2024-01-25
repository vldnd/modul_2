"use strict";

const getIntercalaryYearsByRange = (n, m) => {
  const arr = [];
  for (let i = n; i <= m; i++) {
    if ((i % 4 === 0 && !(i % 100 === 0)) || i % 400 === 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(getIntercalaryYearsByRange(1895, 2024));
