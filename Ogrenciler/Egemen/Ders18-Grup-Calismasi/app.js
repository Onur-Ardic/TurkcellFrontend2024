const tahmin = Math.floor(Math.random() * 100) +1;
console.log(tahmin);
let value = -1;

for (let i = 1; tahmin != value; i++) {
  value = prompt("1'den 100'e kadar bir sayı tahmin edin: ");
  if(isNaN(value) || value < 1 || value > 100){
    alert("Geçerli bir sayı giriniz.");
    continue;
  };
  if (value == tahmin) {
    alert(`Tebrikler ${i} kerede bildin`);
   document.write(`Tahmin Sayınız: ${i} <br> Puanınız: ${100 -((i-1)*2)}`);
  } else if (tahmin > value) {
    alert("Daha büyük bir sayı giriniz.");
  }else {
    alert("Daha küçük bir sayı giriniz.");
  }
}
