while (1) {
  let operator = window.prompt(
    `Yapmak istediğiniz İşlemi Seçiniz:
              1.Faktöriyel 
              2.Asal Sayı  
              3.Çift-Tek durumu 
              4.Süper Sayi
              5.çıkış`
  );

  if (operator > 5 || operator < 1) {
    alert("Hatalı sayı girdiniz.Lütfen tekrar seçiniz.");
  } else {
    if (operator == 5) {
      console.log("çıktınız");
      break;
    }
    let number = window.prompt("Ekrana Bir Sayi Giriniz");

    if (operator == 1) {
      console.log(factorial(number));
      alert(`${number} sayısının faktöriyeli ${factorial(number)}`);
    } else if (operator == 2) {
      console.log(isPrime(number));
      alert(`${number} sayısı ${isPrime(number)}`);
    } else if (operator == 3) {
      console.log(evenOrOdd(number));
      alert(`${number} sayısı ${evenOrOdd(number)}`);
    } else if (operator == 4) {
      console.log(superNumber(number));
      alert(`${number} sayısı ${superNumber(number)}`);
    }
  }
}

function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "çift";
  }
  return "tek";
}
function superNumber(number) {
  count = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      count += i;
    }
  }
  if (count == number) {
    return "süper sayi";
  }
  return "süper sayi değil";
}
function isPrime(number) {
  if (number == 1 || number == 0) {
    return "asal degil";
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return "asal degil";
    }
  }
  return "asal";
}
