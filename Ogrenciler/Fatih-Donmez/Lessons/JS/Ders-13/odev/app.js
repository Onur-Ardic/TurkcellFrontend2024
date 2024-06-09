const btn = document.getElementById("oparation_id");

btn.addEventListener("click", function () {
  const number = parseInt(prompt("Lütfen bir sayı giriniz"));
  if (number) {
    const operation = parseInt(
      prompt(
        "Lütfen bir işlem seçiniz:\n 1. faktoriyel Hesaplama \n 2.Asal Sayı Kontrolü \n 3. Tek Çift Kontrolü \n 4. Süper Sayı Kontrolü "
      )
    );

    switch (operation) {
      case 1:
        faktoriyel(number);
        break;
      case 2:
        asalSayi(number);
        break;
      case 3:
        tekCift(number);
        break;
      case 4:
        superSayi(number);
        break;
      default:
        alert("hatalı işlem");
        break;
    }

    function tekCift(number) {
      if (number % 2 == 0) {
        alert("sayı çift");
      } else {
        alert("sayı tektir");
      }
    }

    function asalSayi(number) {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          alert("sayı asal değil");
          break;
        } else {
          alert("sayı asaldır");
          break;
        }
      }
    }
    function faktoriyel(number) {
      let faktoriyel = 1;
      for (let i = 1; i <= number; i++) {
        faktoriyel = faktoriyel * i;
      }
      alert(faktoriyel);
    }
    function superSayi(number) {
      let toplam = 0;
      for (let i = 1; i < number; i++) {
        if (number % i == 0) {
          toplam = toplam + i;
        }
      }
      if (toplam == number) {
        alert("süper sayıdır");
      } else {
        alert("süper sayı değildir");
      }
    }
  }
});
