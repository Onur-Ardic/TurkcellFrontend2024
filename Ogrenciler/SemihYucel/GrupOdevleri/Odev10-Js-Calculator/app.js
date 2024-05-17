function hesapla() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const islem = document.getElementById('islem').value;
    let sonuc;
  
    switch(islem) {
      case 'topla':
        sonuc = num1 + num2;
        break;
      case 'cikar':
        sonuc = num1 - num2;
        break;
      case 'carp':
        sonuc = num1 * num2;
        break;
      case 'bol':
        sonuc = num1 / num2;
        break;
      default:
        sonuc = 'Geçersiz işlem';
    }
  
    if(confirm(`Sonuç: ${sonuc}\nBaşka bir işlem yapmak ister misiniz?`)) {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('sonuc').innerText = '';
      } else {
        document.querySelector('button').disabled = true;
      }
    }
  
  

  