const randNumber = Math.floor(Math.random() * 100 + 1);
let score = 0;

for (var i = 0; i < 100; i++) {
  let guess = prompt("Bir sayı giriniz: ");
  if (guess == randNumber) {
    console.log("Tebrikler");
    score = i + 1;
    console.log(`Puanınız:${100 - score} 
${score} denemede bildiniz. `);
    break;
  } else if (guess < randNumber) {
    console.log("Büyük");
  } else {
    console.log(" küçük");
  }
}
