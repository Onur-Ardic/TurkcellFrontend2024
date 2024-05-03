function topla(num1, num2) {
  return num1 + num2;
}

function cikar(num1, num2) {
  return num1 - num2;
}

function carp(num1, num2) {
  return num1 * num2;
}

function bol(num1, num2) {
  return num1 / num2;
}

while (true) {
  const islem = Number(prompt("Yapmak istediğiniz işlemi seçiniz:\n 1-Toplama\n 2-Çıkarma\n 3-Çarpma\n 4-Bölme"));
  const num1 = Number(prompt("Birinci sayıyı giriniz"));
  const num2 = Number(prompt("İkinci sayıyı giriniz"));
  switch (islem) {
    case 1:
      alert(topla(num1, num2));
      break;
    case 2:
      alert(cikar(num1, num2));
      break;
    case 3:
      alert(carp(num1, num2));
      break;
    case 4:
      if (num2 == 0) {
        alert("Bir sayıyı 0'a bölemezsiniz!");
      } else {
        alert(bol(num1, num2));
      }
      break;
    default:
      alert("Hatalı işlem!");
      break;
  }

  const devam = prompt("Başka bir işlem yapmak ister misiniz? (E/H)");
  if (devam.toUpperCase() !== "E") {
    break;
  }
}
