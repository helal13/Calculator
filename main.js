// -- Declaring variables
const display = document.querySelector("#currentOperationScreen");
const buttons = Array.from(document.querySelectorAll("button"));

// -- Operations Functions
const sum = (...args) => {
  const argsArr = Array.from(args);
  const summition = argsArr.reduce((a, b) => a + b);
  return summition;
};

const subtract = (...args) => {
  const argsArr = Array.from(args);
  const subtraction = argsArr.reduce((a, b) => a - b);
  return subtraction;
};

const multiply = (...args) => {
  const argsArr = Array.from(args);
  const multiplition = argsArr.reduce((a, b) => a * b);
  return multiplition;
};

const divide = (...args) => {
  const argsArr = Array.from(args);
  const division = argsArr.reduce((a, b) => a / b);
  return division;
};

// -- Function that triggers the operations
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return sum(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return "null";
      } else {
        return divide(a, b);
      }
  }
}
