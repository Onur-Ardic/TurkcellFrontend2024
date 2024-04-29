const value = prompt('Lütfen bir sayı giriniz')

const process = prompt(`
Lütfen bir işlem seçiniz
1 - Faktöriyel Hesaplama
2 - Tek Çift Hesaplama
3 - Süper Sayı Hesaplama
4 - Asal Sayı Hesaplama
`)

if (process == 1) {
  let result = 1
  for (let i = 1; i <= value; i++) {
    result *= i
  }

  alert(`${value} Asal değeri: ${result}`)
} else if (process == 2) {
  for (let i = 1; i <= value; i++) {
    if (value % 2 == 0) {
      alert(`${value} Sayısı çifttir`)
      break
    } else {
      alert(`${value} Sayı tektir`)
    }
  }
} else if (process == 3) {
  let sayiToplam = 0
  for (let i = 1; i < value; i++) {
    if (value % i == 0) {
      sayiToplam += i
    }
  }
  if (value == sayiToplam) {
    alert(`${value} Sayısı süper sayıdır`)
  } else {
    alert(`${value} Sayısı süper sayı değildir`)
  }
} else if (process == 4) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      alert(`${value} Sayısı asal değildir`)
      break
    } else {
      alert(`${value} Sayısı asaldır`)
      break
    }
  }
} else {
  alert('Lütfen geçerli bir işlem seçiniz')
}
