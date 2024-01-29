'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * max + min);

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    function start() {
      const getMoveComputer = () => {
        const x = getRandomIntInclusive(0, 3);
        return FIGURES_RUS[x];
      };

      const resultC = getMoveComputer();

      const message = () => alert(`Результат: \n Компьютер: ${result.computer} \n Игрок:${result.player}`);

      const getMovePlayer = () => {
        const y = prompt('Камень, ножницы, бумага?');
        if (y === null) {
          return message();
        }
        for (const key of FIGURES_RUS) {
          if (key.indexOf(y) === 0) {
            return key;
          }
        }
        return getMovePlayer();
      };

      const resultP = getMovePlayer();
      if (resultC === 'камень') {
        if (resultP === 'камень') {
          message();
          return start();
        } else if (resultP === 'ножницы') {
          result.computer += 1;
          message();
          return start();
        } else if (resultP === 'бумага') {
          result.player += 1;
          message();
          return start();
        }
      } else if (resultC === 'ножницы') {
        if (resultP === 'ножницы') {
          message();
          return start();
        } else if (resultP === 'бумага') {
          result.computer += 1;
          message();
          return start();
        } else if (resultP === 'камень') {
          result.player += 1;
          message();
          return start();
        }
      } else if (resultC === 'бумага') {
        if (resultP === 'бумага') {
          message();
          return start();
        } else if (resultP === 'камень') {
          result.computer += 1;
          message();
          return start();
        } else if (resultP === 'ножницы') {
          result.player += 1;
          message();
          return start();
        }
      }
    }
    start();
  };
  window.PRS = game;
})();
