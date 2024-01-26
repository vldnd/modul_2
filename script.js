'use strict';

const getGameMoreLess = (n, m) => {
  const y = Math.floor(Math.random() * Math.abs(n - m) + 1) + Math.min(n, m);
  console.log(y);
  const x = +prompt(`Введите число от ${Math.min(n, m)} до ${Math.max(n, m)}`);
  const arr = [];
  const recursion = (x, y, arr) => {
    if (arr.length === Math.abs(n - m) * 0.3) {
      return 'Game over';
    } else if (x > Math.max(n, m) || x < Math.min(n, m)) {
      x = +prompt(`Введите число от ${Math.min(n, m)} до ${Math.max(n, m)}`);
      return recursion(x, y, arr);
    } else if (arr.includes(x)) {
      x = +prompt('Вы уже вводили это число!');
      return recursion(x, y, arr);
    } else if (x > y) {
      arr.push(x);
      x = +prompt('Меньше!');
      return recursion(x, y, arr);
    } else if (x < y) {
      arr.push(x);
      x = +prompt('Больше!');
      return recursion(x, y, arr);
    } else {
      return `Вы угадали, это число ${y}`;
    }
  };
  const message = recursion(x, y, arr);
  alert(message);
  if (confirm('Хотите сыграть еще раз?')) {
    getGameMoreLess(n, m);
  }
};

console.log(getGameMoreLess(100, 50));
