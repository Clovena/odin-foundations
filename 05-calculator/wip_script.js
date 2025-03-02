// Style calculator programmatically

const BUTTON_SIZE = 96;

function declareButtonSize(nodes, width, height) {
  pxWidth = `${width}px`;
  pxHeight = `${height}px`;
  for (let n of nodes) {
    let elem = n;
    elem.style.width = pxWidth;
    elem.style.height = pxHeight;
  }
}

const calcContainer = document.querySelector('#container');
calcContainer.style.width = `${BUTTON_SIZE * 5}px`;

const calcDisplay = document.querySelector('#display');
calcDisplay.style.width = `${BUTTON_SIZE * 5}px`;
calcDisplay.style.height = `${BUTTON_SIZE}px`;

const singleButtons = document.querySelectorAll('.single');
const doubleButtons = document.querySelectorAll('.double');
const tripleButtons = document.querySelectorAll('.triple');
const allButtons = {
  ...singleButtons,
  ...doubleButtons,
  ...tripleButtons,
};
declareButtonSize(singleButtons, BUTTON_SIZE, BUTTON_SIZE);
declareButtonSize(doubleButtons, BUTTON_SIZE * 2, BUTTON_SIZE);
declareButtonSize(tripleButtons, BUTTON_SIZE, BUTTON_SIZE * 3);

console.log(calcDisplay.innerText);
