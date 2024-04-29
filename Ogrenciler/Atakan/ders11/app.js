const tahmin = Math.floor(Math.random() * 100) + 1;
console.log(tahmin);
for (let i = 0; i <= 100; i++) {
  let value = prompt("Tahmin ettiğiniz sayıyı giriniz:");
  if (value == tahmin) {
    alert("Tebrikler, bildiniz!");
    break;
  } else if (value < tahmin) {
    alert("Yukarı");
  } else {
    alert("Aşağı");
  }
}
