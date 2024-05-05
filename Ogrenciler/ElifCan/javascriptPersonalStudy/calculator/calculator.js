function writeToInput(text) {
  var inputElement = document.getElementById("textToCalculate");
  inputElement.value += text;
  console.log(inputElement.value);
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
