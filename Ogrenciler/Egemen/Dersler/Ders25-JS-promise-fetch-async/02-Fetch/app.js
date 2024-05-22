function getTextFile() {
  fetch("text.txt")
    .then((response) => response.text())
}
