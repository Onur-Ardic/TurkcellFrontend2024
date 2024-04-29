const value = prompt('Lütfen bir sayı giriniz')
function process() {
  alert(`
  
  1 - Faktöriyel Hesaplama
  2 - Tek Çift Hesaplama
  3 - Süper Sayı Hesaplama
  4 - Asal Sayı Hesaplama

  `)

  const switchCase = Number(prompt('Lütfen bir işlem seçiniz'))

  return toString(switchCase)
}

const tercih = process()

switch (tercih) {
  case 1:
    let result = 1
    for (let i = 1; i <= value; i++) {
      result *= i
    }

    alert(`${value} Asal değeri: ${result}`)

    break
  case 2:
    const copy = () => {
      for (let i = 1; i <= value; i++) {
        if (i % 2 === 0) {
          alert(`${value} Sayı çifttir`)
        } else {
          alert(`${value} Sayı tektir`)
        }
      }
    }
    break

  case 3:
    const supper = () => {
      let sayiToplam = 0
      for (let i = 1; i < value; i++) {
        if (value % i === 0) {
          sayiToplam = +i
        }
      }
      if (value == sayiToplam) {
        alert(`${value} Sayı süper sayıdır`)
      } else {
        alert(`${value} Sayı süper sayı değildir`)
      }
    }
    break

  case 4:
    const asal = () => {
      for (let i = 2; i < value; i++) {
        if (value % i === 0) {
          alert(`${value} Sayı asal değildir`)
        } else {
          alert(`${value} Sayı asaldır`)
        }
      }
    }
    break

  default:
}
