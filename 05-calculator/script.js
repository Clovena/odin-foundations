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
  //// Controls which variable, expressionLeft or expressionRight,
  //// to save numeric inputs

  isEvaluated = false,
  //// Controls when display reverts from expression, plus equals-sign
  //// back to new building expression

  hasDecimal = false;
//// Controls when decimal can be added; if one already exists in
//// expressionLeft or expressionRight, no second decimal can be added

// All-clear button
const allClearButton = document.querySelector('#all-clear');
allClearButton.addEventListener('click', () => {
  displayValue.textContent = '';
  miniDisplayValue.textContent = '';
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
  if (expressionRight != '') {
    // if expression is completely assembled
    let result = evaluateExpression(expressionLeft, expressionRight, operation);
    displayValue.textContent = result;
    miniDisplayValue.textContent += '=';
    expressionLeft = result;
  } else if (operation != '') {
    // if left-hand side and operator are inputted, perform operation on self
    let result = evaluateExpression(expressionLeft, expressionLeft, operation);
    displayValue.textContent = result;
    miniDisplayValue.textContent += `${expressionLeft}=`;
    expressionLeft = result;
  } else if (expressionLeft != '') {
    // if only left-hand side is inputted, return self
    let result = +expressionLeft;
    displayValue.textContent = result;
    expressionLeft = result;
    if (!isEvaluated) {
      miniDisplayValue.textContent += '=';
    } else {
      miniDisplayValue.textContent = `${result}=`;
    }
  }
  expressionRight = '';
  operation = '';
  isLeftSide = true;
  isEvaluated = true;
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
decimalButton.addEventListener('click', () => {
  if (!hasDecimal) {
    if (isLeftSide) {
      expressionLeft += '.';
    } else {
      expressionRight += '.';
    }
    displayValue.textContent += decimalButton.textContent;
    if (isEvaluated) {
      miniDisplayValue.textContent = expressionLeft;
    } else {
      miniDisplayValue.textContent += decimalButton.textContent;
    }
    isEvaluated = false;
    hasDecimal = true;
  }
});

// Instant-operator buttons
const instantButtons = document.querySelectorAll('.instant-operator');
instantButtons.forEach((b) => {
  b.addEventListener('click', () => {
    if (operation === '') {
      let result = evaluateInstantOperator(expressionLeft, b.textContent);
      if (b.textContent === '√') {
        miniDisplayValue.textContent = `√${expressionLeft} =`;
      } else if (b.textContent === '%') {
        miniDisplayValue.textContent = `${expressionLeft}% =`;
      }

      isEvaluated = true;
      displayValue.textContent = result;
      expressionLeft = result;
      expressionRight = '';
      isLeftSide = true;
      hasDecimal = false;
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

// TODO:
//// Plus-minus doesn't do anything yet. 
