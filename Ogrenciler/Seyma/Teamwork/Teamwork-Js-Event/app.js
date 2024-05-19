const textInput = document.getElementById("fname");
textInput.addEventListener("keyup", () => console.log(textInput.value));
textInput.addEventListener("focus", () => (textInput.value = ""));

const textInput2 = document.getElementById("lname");
textInput2.addEventListener("focus", () => (textInput2.style.border = "1px solid red"));

const textInput3 = document.getElementById("address");
textInput3.addEventListener("focus", () => (textInput3.style.border = "1px solid blue"));

const address = document.getElementById("address");
  address.addEventListener("keyup", function(event) {
    event.preventDefault();
    address.value = address.value.toUpperCase();
  });

