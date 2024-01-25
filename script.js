"use strict";

const getGameMoreLess = (n, m) => {
  const y = Math.floor(Math.random() * Math.abs(n - m) + 1) + Math.min(n, m);
  console.log(y);
  let x = +prompt(`Введите число от ${Math.min(n, m)} до ${Math.max(n, m)}`);
  const arr = [];
  let message = `Вы угадали, это число ${y}`;
  while (true) {
    if (arr.length === Math.abs(n - m) * 0.3) {
      message = "Game over";
      break;
    } else if (x > Math.max(n, m) || x < Math.min(n, m)) {
      x = +prompt(`Введите число от ${Math.min(n, m)} до ${Math.max(n, m)}`);
    } else if (arr.includes(x)) {
      x = +prompt("Вы уже вводили это число!");
    } else if (x > y) {
      arr.push(x);
      x = +prompt("Меньше!");
    } else if (x < y) {
      arr.push(x);
      x = +prompt("Больше!");
    } else {
      break;
    }
  }
  alert(message);
  if (confirm("Хотите сыграть еще раз?")) {
    getGameMoreLess(n, m);
  }
};

console.log(getGameMoreLess(100, 50));
