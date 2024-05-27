let numberScreen = document.getElementById("numberScreen");
let equalButton = document.getElementById("equalButton");
let allClearButton = document.getElementById("allClearButton");
let clearButton = document.getElementById("clearButton");

let operators = ["+", "-", "*", "/", "%", "="];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let isOperator;
let isNumber;
let buffer = "";
let operator = "";
let firstBuffer = 0;
let result = 0;

const getMode = (number1, number2) => {
  result = parseFloat(number1) % parseFloat(number2);
  return result;
};

const sum = (number1, number2) => {
  result = parseFloat(number1) + parseFloat(number2);
  return result;
};

const substraction = (number1, number2) => {
  result = parseFloat(number1) - parseFloat(number2);
  return result;
};

const multiplication = (number1, number2) => {
  result = (parseFloat(number1) * parseFloat(number2)).toFixed(2);
  return result;
};

const division = (number1, number2) => {
  result = (parseFloat(number1) / parseFloat(number2)).toFixed(2);
  return result;
};

const clearScreen = () => {
  numberScreen.value = "";
  buffer = "";
  firstBuffer = 0;
  operator = "";
};

const clearOne = () => {
  numberScreen.value = numberScreen.value.slice(0, -1);
  buffer = buffer.slice(0, -1);
};

const calculator = (value) => {
  numberScreen.value += value;
  isOperator = operators.includes(value);
  isNumber = numbers.includes(value);

  if (isNumber) {
    buffer += value;
  }

  if (isOperator) {
    if (operator !== "") {
      calculate(operator);
    } else {
      firstBuffer = buffer;
      buffer = "";
    }

    operator = value;

    if (operator == "=") {
      numberScreen.value = firstBuffer;
      buffer = firstBuffer;
      firstBuffer = 0;
      operator = "";
    }
  }
};

const calculate = (operator) => {
  switch (operator) {
    case "+":
      {
        result = sum(firstBuffer, buffer);
        firstBuffer = result;
        buffer = "";
        operator = "";
      }
      break;
    case "-":
      {
        result = substraction(firstBuffer, buffer);
        firstBuffer = result;
        buffer = "";
        operator = "";
      }
      break;
    case "*":
      {
        result = multiplication(firstBuffer, buffer);
        firstBuffer = result;
        buffer = "";
        operator = "";
      }
      break;
    case "/":
      {
        result = division(firstBuffer, buffer);
        firstBuffer = result;
        buffer = "";
        operator = "";
      }
      break;
    case "%":
      {
        result = getMode(firstBuffer, buffer);
        firstBuffer = result;
        buffer = "";
        operator = "";
      }
      break;
  }
};
