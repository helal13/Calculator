// -- Declaring Valiables
const display = document.querySelector("#currentOperationScreen");
const buttons = Array.from(document.querySelectorAll(".btn"));
const clear = document.querySelector("#clearBtn");
const deletebtn = document.querySelector("#deleteBtn");
const equal = document.querySelector("#equalsBtn");
const operationBtn = Array.from(document.querySelectorAll(".operationBtn"));
const savedOperation = document.querySelector("#lastOperationScreen");
let globalOperator;

//  -- EventListeners
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;
    display.textContent += value;
    savedOperation.textContent = display.textContent;
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const operator = e.target.textContent;
    globalOperator = operator;
  });
});

equal.addEventListener("click", () => {
  if (display.textContent === "") {
    return;
  }
  solution();
});

clear.addEventListener("click", () => {
  clearAll();
});

deletebtn.addEventListener("click", () => {
  deletelast();
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Backspace") {
    deletelast();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Tab") {
    solution();
  }
});

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

const clearAll = () => {
  display.textContent = "";
  savedOperation.textContent = "";
};

const deletelast = () => {
  let displayArray = Array.from(display.textContent);
  displayArray.pop();
  const joinedArray = displayArray.join("");
  display.textContent = joinedArray;
};

const solution = () => {
  let result = display.textContent;
  let splitted = result.split(globalOperator);
  if (splitted[1] === "") {
    return;
  }
  let firstAnswer =
    Math.round(operate(splitted[0], globalOperator, splitted[1]) * 100) / 100;
  savedOperation.textContent = display.textContent;
  display.textContent = firstAnswer;
  if (display.textContent === "NaN") {
    display.textContent = `Invalid Entry`;
  }
};

// -- Function that triggers the operations
function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return sum(a, b);
      break;
    case "???":
      return subtract(a, b);
      break;
    case "??":
      return multiply(a, b);
    case "??":
      if (b === 0.0) {
        return "Can not divide by 0";
      } else {
        return divide(a, b);
      }
  }
}
