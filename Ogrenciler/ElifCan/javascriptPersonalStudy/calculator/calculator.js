function writeToInput(text) {
  var inputElement = document.getElementById("textToCalculate");
  inputElement.value += text;
}

function deleteAnElement() {
  var textElement = document.getElementById("textToCalculate");
  var currentValue = textElement.value;
  var newText = currentValue.substring(0, currentValue.length - 1);
  textElement.value = newText;
}
function allClear() {
  document.getElementById("textToCalculate").value = "";
}
function calculate() {
  const result = math.evaluate(
    document.getElementById("textToCalculate").value
  );
  document.getElementById("result").innerText = result;
}
