const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnSum = document.getElementById("btnSum");
const btnSubs = document.getElementById("btnSubs");
const btnMultiple = document.getElementById("btnMultiple");
const btnDivide = document.getElementById("btnDivide");
const result = document.getElementById("result");
const clearInputsBtn = document.getElementById('clearInputs');

clearInputsBtn.addEventListener("click", function () {
    input1.value = "";
    input2.value = "";
    result.innerText = "";
    clearInputsBtn.style.display = "none";
});
btnSum.addEventListener("click", function () {
    result.innerText = Number(input1.value) + Number(input2.value);
    clearInputsBtn.style.display = "block";
});

btnSubs.addEventListener("click", function () {
    result.innerText = Number(input1.value) - Number(input2.value);
    clearInputsBtn.style.display = "block";
});

btnMultiple.addEventListener("click", function () {
    result.innerText = Number(input1.value) * Number(input2.value);
    clearInputsBtn.style.display = "block";
});

btnDivide.addEventListener("click", function () {
    result.innerText = Number(input1.value) / Number(input2.value);
    clearInputsBtn.style.display = "block";
});

