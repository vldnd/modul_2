'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * max + min);

  // const getFigure = lang => {};

  const game = language => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    function start() {
      if (lang === FIGURES_RUS) {
        const getMoveComputer = () => {
          const x = getRandomIntInclusive(0, 3);
          return FIGURES_RUS[x];
        };

        const resultC = getMoveComputer();

        const message = () => alert(`Результат: \n Компьютер: ${result.computer} \n Игрок:${result.player}`);

        const getMovePlayer = () => {
          const y = prompt('Камень, ножницы, бумага?');
          if (y === null) {
            return confirm('Хотите сыграть еще раз') ? getMovePlayer() : message();
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
      } else if (lang === FIGURES_ENG) {
        const getMoveComputer = () => {
          const x = getRandomIntInclusive(0, 3);
          return FIGURES_ENG[x];
        };

        const resultC = getMoveComputer();

        const message = () => alert(`Result: \n Computer: ${result.computer} \n Player:${result.player}`);

        const getMovePlayer = () => {
          const y = prompt('Rock, scissors, paper?');
          if (y === null) {
            return confirm('Do you want to play again?') ? getMovePlayer() : message();
          }
          for (const key of FIGURES_ENG) {
            if (key.indexOf(y) === 0) {
              return key;
            }
          }
          return getMovePlayer();
        };

        const resultP = getMovePlayer();
        if (resultC === 'rock') {
          if (resultP === 'rock') {
            message();
            return start();
          } else if (resultP === 'scissors') {
            result.computer += 1;
            message();
            return start();
          } else if (resultP === 'paper') {
            result.player += 1;
            message();
            return start();
          }
        } else if (resultC === 'scissors') {
          if (resultP === 'scissors') {
            message();
            return start();
          } else if (resultP === 'paper') {
            result.computer += 1;
            message();
            return start();
          } else if (resultP === 'rock') {
            result.player += 1;
            message();
            return start();
          }
        } else if (resultC === 'paper') {
          if (resultP === 'paper') {
            message();
            return start();
          } else if (resultP === 'rock') {
            result.computer += 1;
            message();
            return start();
          } else if (resultP === 'scissors') {
            result.player += 1;
            message();
            return start();
          }
        }
      }
    }
    start();
  };
  window.PRS = game;
})();
