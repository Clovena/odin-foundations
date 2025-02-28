// Declare operator functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// Declare evaluation function, used within equalsButtom.addEventListener
function evaluateExpression(left, right, fn) {
  if (fn === '+') {
    return add(left, right);
  } else if (fn === '-') {
    return subtract(left, right);
  } else if (fn === 'x') {
    return multiply(left, right);
  } else if (fn === '÷') {
    return divide(left, right);
  } else {
    return 'Error';
  }
}

// Declare components of the expression
let expressionLeft = '',
  expressionRight = '',
  isLeftSide = true,
  operation = '';

const miniDisplayValue = document.querySelector('#mini-display');
const displayValue = document.querySelector('#big-display');

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  let result = evaluateExpression(expressionLeft, expressionRight, operation);
  miniDisplayValue.textContent += '=';
  displayValue.textContent = result;
  expressionLeft = result;
  expressionRight = '';
  isLeftSide = true;
  operation = '';
});

const numeralButtons = document.querySelectorAll('.numeral');
numeralButtons.forEach((b) => {
  b.addEventListener('click', () => {
    displayValue.textContent += b.textContent;
    miniDisplayValue.textContent += b.textContent;
    // Append numeral value to corresponding side of expression
    if (isLeftSide) {
      expressionLeft += b.textContent;
    } else {
      expressionRight += b.textContent;
    }
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((b) => {
  b.addEventListener('click', () => {
    if (operation === '') {
      operation = b.textContent;
      displayValue.textContent += b.textContent;
      miniDisplayValue.textContent += b.textContent;
      isLeftSide = false;
    }
  });
});
