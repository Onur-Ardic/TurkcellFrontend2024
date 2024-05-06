const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnSum = document.getElementById("btnSum");
const btnSubs = document.getElementById("btnSubs");
const btnMultiple = document.getElementById("btnMultiple");
const btnDivide = document.getElementById("btnDivide");
const result = document.getElementById("result");
const clearInputsBtn = document.getElementById('clearInputs');

function calculate(operation) {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = "Lütfen bir sayı giriniz.";
        clearInputsBtn.style.display = "block";
        return;
    }
    let sonuc;
    switch (operation) {
        case 'add':
            sonuc = num1 + num2;
            break;
        case 'subtract':
            sonuc = num1 - num2;
            break;
        case 'multiply':
            sonuc = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result.innerText = "Sıfıra bölme hatası";
                clearInputsBtn.style.display = "block";
                return;
            }
            sonuc = num1 / num2;
            break;
        default:
            return;
    }

    result.innerText = `Sonuç: ${sonuc}`;
    clearInputsBtn.style.display = "block";
}
btnSum.addEventListener("click", () => calculate('add'));
btnSubs.addEventListener("click", () => calculate('subtract'));
btnMultiple.addEventListener("click", () => calculate('multiply'));
btnDivide.addEventListener("click", () => calculate('divide'));

clearInputsBtn.addEventListener("click", function () {
    input1.value = "";
    input2.value = "";
    result.innerText = "";
    clearInputsBtn.style.display = "none";
});

