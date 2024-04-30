let result;

while (1) {
  let operator = window.prompt(
    `Yapmak istediğiniz İşlemi Seçiniz:
                1.Toplama 
                2.Çıkarma 
                3.Çarpma 
                4.Bölme
                5.Çıkış`
  );

  if (operator > 5 || operator < 1) {
    alert("Hatalı sayı girdiniz.Lütfen tekrar seçiniz.");
  } else {
    if (operator == 5) {
      console.log("çıktınız");
      break;
    }
    let number1 = parseInt(window.prompt("İlk Sayiyi Giriniz"));
    let number2 = parseInt(window.prompt("İkinci Sayiyi Giriniz"));

    if (operator == 1) {
      result = toplama(number1, number2);
      console.log(result);
      alert(`${number1} + ${number2} = ${result}`);
    } else if (operator == 2) {
      result = cikarma(number1, number2);
      console.log(result);
      alert(`${number1} - ${number2} = ${result}`);
    } else if (operator == 3) {
      result = carpma(number1, number2);
      console.log(result);
      alert(`${number1} * ${number2} = ${result}`);
    } else if (operator == 4) {
      result = bolme(number1, number2);
      console.log(result);
      alert(`${number1} / ${number2} = ${result}`);
    }
  }
}

function toplama(number1, number2) {
  return number1 + number2;
}
function cikarma(number1, number2) {
  return number1 - number2;
}
function carpma(number1, number2) {
  return number1 * number2;
}
function bolme(number1, number2) {
  if (number2 == 0) {
    alert("Payda 0 olamaz");
    return "Tanımsız";
  }
  return (number1 / number2).toFixed(2);
}
