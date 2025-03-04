//# Declare constant variables
const DEFAULT_ROWS = 12;
let currentRows = DEFAULT_ROWS;
const MAX_ROWS = 48;
const DEFAULT_COLOR = '#eeeeee';
const PAINTED_COLOR = '#aaaaaa';
let rainbowPixels = false;

const resizeButton = document.querySelector('#aspect');
const rainbowButton = document.querySelector('#color');
const clearButton = document.querySelector('#clear');
const banner = document.querySelector('#banner');
const container = document.querySelector('#container');

const roundDown = function (num) {
  return num - (num % 1);
};

//# Generate pixels via loop
const generateBoard = function (numRows) {
  let res = numRows * numRows;
  let pixelRatio = `${100 / numRows}%`;
  currentRows = numRows;

  //## Clear board by deletion
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  //## Rebuild board with declared size
  for (let i = 0; i < res; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = pixelRatio;
    pixel.style.paddingBottom = pixelRatio;

    pixel.style.backgroundColor = DEFAULT_COLOR;
    container.appendChild(pixel);

    pixel.addEventListener('mouseover', function (e) {
      let paint = PAINTED_COLOR;

      if (rainbowPixels) {
        // Generate a random number and convert it to hexadecimal.
        // Return the hexadecimal color code with '#' appended.

        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        paint = '#' + n.slice(0, 6);
      }

      e.target.style.background = paint;
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {
  generateBoard(DEFAULT_ROWS);
});

//# Prompt size input
resizeButton.addEventListener('click', function () {
  let size = prompt('Input your desired number of rows: ');
  if (isNaN(+size)) {
    generateBoard(DEFAULT_ROWS);
  } else {
    sizeFloor = roundDown(size);
    sizeMin = Math.min(MAX_ROWS, sizeFloor);
    generateBoard(sizeMin);
  }
});

rainbowButton.addEventListener('click', function () {
  rainbowPixels = !rainbowPixels;
  if (rainbowPixels) {
    banner.textContent = 'Rainbow mode is on!';
  } else {
    banner.textContent = 'Rainbow mode is off.';
  }
});

clearButton.addEventListener('click', function () {
  generateBoard(currentRows);
});
