// Declare evaluation function, used within equalsButtom.addEventListener
function evaluateExpression(left, right, fn) {
  let a = +left,
    b = +right;
  if (fn === '+') {
    return a + b;
  } else if (fn === '-') {
    return a - b;
  } else if (fn === 'x') {
    return a * b;
  } else if (fn === '÷') {
    return a / b;
  } else {
    return 'Error';
  }
}

const miniDisplayValue = document.querySelector('#mini-display');
const displayValue = document.querySelector('#big-display');

// Declare components of the expression
let expressionLeft = '',
  expressionRight = '',
  operation = '';

// Declare boolean flags to control behavior
let isLeftSide = true,
  isEvaluated = false,
  hasDecimal = false;

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

// Decimal button
const decimalButton = document.querySelector('#decimal');


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
// AC and Del don't do anything yet.
// Decimal doesn't do anything yet.
