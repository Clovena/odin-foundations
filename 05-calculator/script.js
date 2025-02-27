const BUTTON_SIZE = 96;

const calcContainer = document.querySelector('#container');
calcContainer.style.width = `${BUTTON_SIZE * 5}px`;

const singleButtons = document.querySelectorAll('.single');
const doubleButtons = document.querySelectorAll('.double');
const tripleButtons = document.querySelectorAll('.triple');
const allButtons = {
  ...singleButtons,
  ...doubleButtons,
  ...tripleButtons,
};

function declareButtonSize(nodes, width, height) {
  pxWidth = `${width}px`;
  pxHeight = `${height}px`;
  for (let n of nodes) {
    const elem = n;
    elem.style.width = pxWidth;
    elem.style.height = pxHeight;
  }
}

declareButtonSize(singleButtons, BUTTON_SIZE, BUTTON_SIZE);
declareButtonSize(doubleButtons, BUTTON_SIZE * 2, BUTTON_SIZE);
declareButtonSize(tripleButtons, BUTTON_SIZE, BUTTON_SIZE * 3);
