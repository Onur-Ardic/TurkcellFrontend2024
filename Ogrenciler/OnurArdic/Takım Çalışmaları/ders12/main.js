const value = Number(prompt('Lütfen bir sayı giriniz'))
function process() {
  alert(`
  1 - Faktöriyel Hesaplama
  2 - Tek Çift Hesaplama
  3 - Süper Sayı Hesaplama
  4 - Asal Sayı Hesaplama
  `)

  const switchCase = Number(prompt('Lütfen bir işlem seçiniz'))

  return switchCase
}

const tercih = process()

switch (tercih) {
  case 1:
    let result = 1
    for (let i = 1; i < value; i++) {
      result *= i
    }

    alert(`${value} Asal değeri: ${result}`)

    break
  case 2:
    for (let i = 0; i < value; i++) {
      if (value % 2 == 0) {
        alert(`${value} Sayı çifttir`)
        break
      } else {
        alert(`${value} Sayı tektir`)
        break
      }
    }
    break

  case 3:
    let sayiToplam = 0
    for (let i = 1; i < value; i++) {
      if (value % i == 0) {
        sayiToplam += i
      }
    }
    if (value == sayiToplam) {
      alert(`${value} Sayı süper sayıdır`)
    } else {
      alert(`${value} Sayı süper sayı değildir`)
    }
    break

  case 4:
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        alert(`${value} Sayı asal değildir`)
        break
      } else {
        alert(`${value} Sayı asaldır`)
        break
      }
    }
    break
}
