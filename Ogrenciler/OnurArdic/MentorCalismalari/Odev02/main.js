window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const chosenChair = localStorage.key(i)
    const chairs = document.querySelectorAll('.chair')

    chairs.forEach((chairElement) => {
      if (chairElement.innerText === chosenChair) {
        chairElement.style.backgroundColor = 'green'
        chairElement.style.color = 'white'
        chairElement.innerText = `${chosenChair} Numaralı Koltuk Rezerve Edildi. ${chosenChair}`
      }
    })
  }
}

const chair = document.querySelectorAll('.chair')

chair.forEach((chairİtem) => {
  chairİtem.addEventListener('click', () => {
    let chairNumber = chairİtem.innerText.split(' ')[0]

    if (chairİtem.style.backgroundColor === 'green') {
      const value = confirm(
        `${chairNumber} Numaralı Koltuğun Rezervasyonunu İptal Etmek İstiyor musunuz?`,
      )
      if (value === true) {
        chairİtem.style.backgroundColor = 'white'
        chairİtem.style.color = 'black'
        chairİtem.innerText = `${chairNumber}`
        console.log(chairNumber)
        localStorage.removeItem(chairNumber)
      }
    } else {
      const value = confirm(
        `${chairNumber} Numaralı Koltuğu Rezerve Edeceksiniz Onaylıyor musunuz?`,
      )

      if (value === true) {
        chairİtem.style.backgroundColor = 'green'
        chairİtem.style.color = 'white'
        chairİtem.innerText = `${chairNumber} Numaralı Koltuk Rezerve Edildi`
        localStorage.setItem(chairNumber, 'reserved')
      }
    }
  })
})
