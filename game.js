'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * max + min);

  const result = {
    player: 0,
    computer: 0,
  };
  const speech = {
    RU: {
      figures: FIGURES_RUS,
      message(c, p) {
        alert(`Результат: \n Компьютер: ${c} \n Игрок:${p}`);
      },
      question: 'Камень, ножницы, бумага?',
      question2: 'Хотите сыграть еще раз?',
    },
    EN: {
      figures: FIGURES_ENG,
      message(c, p) {
        alert(`Result: \n Computer: ${c} \n Player:${p}`);
      },
      question: 'Rock, scissors, paper?',
      question2: 'Do you want to play again?',
    },
  };
  const gameRSP = language => {
    const lang = language === 'EN' || language === 'ENG' ? speech['EN'] : speech['RU'];
    function start() {
      const getMoveComputer = () => {
        const x = getRandomIntInclusive(0, 3);
        return lang.figures[x];
      };

      const resultC = getMoveComputer();

      // const message = () => alert(lang.message(result.computer, result.player));

      const message1 = () => alert('Ваш ход');
      const message2 = () => alert('Ход бота');

      const getMovePlayer = () => {
        const y = prompt(lang.question);
        if (y === null) {
          // return confirm(lang.question2) ? getMovePlayer() : message();
          return getMovePlayer();
        }
        for (const key of lang.figures) {
          if (key.indexOf(y) === 0) {
            return key;
          }
        }
        return getMovePlayer();
      };

      const resultP = getMovePlayer();

      if (resultC === lang.figures[0]) {
        if (resultP === lang.figures[0]) {
          // message();
          return start();
        } else if (resultP === lang.figures[1]) {
          result.computer += 1;
          message2();
          return 0;
        } else if (resultP === lang.figures[2]) {
          result.player += 1;
          message1();
          return 1;
        }
      } else if (resultC === lang.figures[1]) {
        if (resultP === lang.figures[1]) {
          // message();
          return start();
        } else if (resultP === lang.figures[2]) {
          result.computer += 1;
          message2();
          return 0;
        } else if (resultP === lang.figures[0]) {
          result.player += 1;
          message1();
          return 1;
        }
      } else if (resultC === lang.figures[2]) {
        if (resultP === lang.figures[2]) {
          // message();
          return start();
        } else if (resultP === lang.figures[0]) {
          result.computer += 1;
          message2();
          return 0;
        } else if (resultP === lang.figures[1]) {
          result.player += 1;
          message1();
          return 1;
        }
      }
    }
    return start();
  };
  const game = () => {
    console.log('Старт игры');
    const result = {
      player: 5,
      computer: 5,
    };

    const message = () => alert(`Количество шариков: \n Игрок:${result.player} \n Бот: ${result.computer} `);

    console.log(`Количество шариков: \n Игрок:${result.player} \n Бот: ${result.computer} `);

    const getMovePlayer2 = () => {
      const player1 = () => {
        const x = +prompt('Введите количество шариков');
        if (x === null) {
          return message();
        } else if (Number.isNaN(x) || x > result.player || x < 1) {
          return player1();
        } else {
          return x;
        }
      };

      const resultP = player1();

      const computer2 = () => {
        return getRandomIntInclusive(1, result.player);
      };

      const resultC = computer2();

      console.log(result);
      console.log(resultP, resultC);

      if ((resultC % 2 === 0 && resultP % 2 === 0) || (resultC % 2 !== 0 && resultP % 2 !== 0)) {
        result.computer += resultP;
        result.player -= resultP;
      } else {
        result.computer -= resultP;
        result.player += resultP;
      }

      if (result.computer === 0 || result.player === 0) {
        return message();
      } else {
        message();
        return getMoveComputer2();
      }
    };

    const getMoveComputer2 = () => {
      const computer2 = () => {
        return getRandomIntInclusive(result.computer);
      };

      const resultC = computer2();

      const player2 = () => {
        const x = confirm('Число шариков четное?');
        if (x) {
          return 2;
        } else {
          return 3;
        }
      };

      const resultP = player2();

      console.log(result);
      console.log(resultP, resultC);

      if ((resultC % 2 === 0 && resultP % 2 === 0) || (resultC % 2 !== 0 && resultP % 2 !== 0)) {
        result.computer -= resultP;
        result.player += resultP;
      } else {
        result.computer += resultP;
        result.player -= resultP;
      }

      if (result.computer === 0 || result.player === 0) {
        return message();
      } else {
        message();
        return getMovePlayer2();
      }
    };
    gameRSP('RU') === 1 ? getMovePlayer2() : getMoveComputer2();
  };
  debugger;
  game();
})();
