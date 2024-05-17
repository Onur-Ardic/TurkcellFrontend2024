const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const gonder = document.getElementById("gonder");
const form = document.getElementById("form");
const input1div = document.getElementById("input1-div");
const input2div = document.getElementById("input2-div");
const input3div = document.getElementById("input3-div");

input1.addEventListener("focus", function () {
  input1.style.border = "1px solid blue";
});
input2.addEventListener("focus", function () {
  input2.style.border = "1px solid blue";
});
input3.addEventListener("focus", function () {
  input3.style.border = "1px solid blue";
});

input1.addEventListener("blur", function () {
  input1.style.border = "";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input1.value.length < 3) {
    input1div.appendChild(
      document
        .createElement("span")
        .appendChild(
          document.createTextNode("İsminiz en az 3 karakter olmalıdır.")
        )
    );
    input1.style.border = "1px solid red";
  } else {
    input1.style.border = "1px solid green";
  }
  if (input2.value.length < 3) {
    input2div.appendChild(
      document
        .createElement("span")
        .appendChild(
          document.createTextNode("Soyisminiz en az 3 karakter olmalıdır.")
        )
    );
    input2.style.border = "1px solid red";
  } else {
    input2.style.border = "1px solid green";
  }
  if (input3.value < 18 || input3.value > 65) {
    input3div.appendChild(
      document
        .createElement("span")
        .appendChild(
          document.createTextNode("Yaşınız 18 ile 65 arasında olmalıdır.")
        )
    );
    input3.style.border = "1px solid red";
  } else {
    input3.style.border = "1px solid green";
  }
  if (
    input1.value.length >= 3 &&
    input2.value.length >= 3 &&
    input3.value >= 18 &&
    input3.value <= 65
  ) {
    form.submit();
  } else {
    gonder.style.border = "2px solid red";
    gonder.style.backgroundColor = "red";
  }
});
