// Declare evaluation function, used within equalsButtom.addEventListener
function evaluateExpression(left, right, fn) {
  let a = +left,
    b = +right,
    c = 0;
  if (fn === '+') {
    c = a + b;
  } else if (fn === '-') {
    c = a - b;
  } else if (fn === 'x') {
    c = a * b;
  } else if (fn === '÷') {
    c = a / b;
  } else if (fn === '^') {
    c = a ** b;
  } else {
    c = 'Error';
  }

  //// May be able to apply rounding at this step
  return c;
}

function evaluateInstantOperator(num, fn) {
  let a = +num;
  if (fn === '√') {
    return Math.sqrt(a);
  } else if (fn === '%') {
    return a / 100;
  } else {
    return 'Error';
  }
}

// Declare components of the display
const displayValue = document.querySelector('#big-display');
const miniDisplayValue = document.querySelector('#mini-display');

// Declare components of the expression
let expressionLeft = '',
  expressionRight = '',
  operation = '';

// Declare boolean flags to control behavior
let isLeftSide = true,
  isEvaluated = false,
  hasDecimal = false;

// All-clear button
const allClearButton = document.querySelector('#all-clear');
allClearButton.addEventListener('click', () => {
  miniDisplayValue.textContent = '';
  displayValue.textContent = '';
  expressionLeft = '';
  expressionRight = '';
  operation = '';
  isLeftSide = true;
  isEvaluated = false;
  hasDecimal = false;
});

// Equals button
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  let result = evaluateExpression(expressionLeft, expressionRight, operation);
  miniDisplayValue.textContent += '=';

  isEvaluated = true;
  displayValue.textContent = result;
  expressionLeft = result;
  expressionRight = '';
  isLeftSide = true;
  operation = '';
});

// Numeral buttons
const numeralButtons = document.querySelectorAll('.numeral');
numeralButtons.forEach((b) => {
  b.addEventListener('click', () => {
    // Append numeral value to corresponding side of expression
    if (isLeftSide) {
      expressionLeft += b.textContent;
    } else {
      expressionRight += b.textContent;
    }
    displayValue.textContent += b.textContent;
    if (isEvaluated) {
      miniDisplayValue.textContent = expressionLeft;
    } else {
      miniDisplayValue.textContent += b.textContent;
    }
    isEvaluated = false;
  });
});

// Decimal button
const decimalButton = document.querySelector('#decimal');

// Instant-operator buttons
const instantButtons = document.querySelectorAll('.instant-operator');
instantButtons.forEach((b) => {
  b.addEventListener('click', () => {
    if (operation === '') {
      let result = evaluateInstantOperator(expressionLeft, b.textContent);
      if (b.textContent === '√') {
        miniDisplayValue.textContent = `√${miniDisplayValue.textContent} =`;
      } else if (b.textContent === '%') {
        miniDisplayValue.textContent += '% =';
      }

      isEvaluated = true;
      displayValue.textContent = result;
      expressionLeft = result;
      expressionRight = '';
      isLeftSide = true;
      operation = '';
    }
  });
});

// Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((b) => {
  b.addEventListener('click', () => {
    if (operation === '') {
      operation = b.textContent;
      displayValue.textContent += operation;
      if (isEvaluated) {
        miniDisplayValue.textContent = expressionLeft + operation;
      } else {
        miniDisplayValue.textContent += operation;
      }
      isLeftSide = false;
    }
    isEvaluated = false;
    hasDecimal = false;
  });
});

// CURRENT KNOWN BUGS
// After evaluating, use of numeral or operator button does not clear
// mini display, simply concatenates.
// i.e. need a way to clear mini-display and append result value
//
// Can evaluate expressions without
// one or both of expressionLeft and expressionRight
//
// Two consecutive equals signs results in error

// TODO:
// Del doesn't do anything yet.
// Decimal doesn't do anything yet.
