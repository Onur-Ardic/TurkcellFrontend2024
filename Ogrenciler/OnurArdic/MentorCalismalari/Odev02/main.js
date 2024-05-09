const firstName = document.getElementById('name')
const surName = document.getElementById('surname')
const ticketWrapper = document.querySelector('.ticket-card-reserved')
const reservedValue = []

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const chosenChair = localStorage.key(i)
    const chairs = document.querySelectorAll('.chair')

    chairs.forEach((chairElement) => {
      if (chairElement.innerText === chosenChair) {
        chairElement.style.backgroundColor = 'green'
        chairElement.style.color = 'white'
        chairElement.innerText = `${chosenChair} Numaralı Koltuk Rezerve Edildi.`
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
        localStorage.removeItem(chairNumber)
      }
    } else {
      const value = confirm(
        `${chairNumber} Numaralı Koltuğu Rezerve Edeceksiniz Onaylıyor musunuz?`,
      )

      if (value === true) {
        const person = {
          name: firstName.value,
          surname: surName.value,
          chairNumber: chairNumber,
        }
        chairİtem.style.backgroundColor = 'green'
        chairİtem.style.color = 'white'
        chairİtem.innerText = `${chairNumber} Numaralı Koltuk Rezerve Edildi`
        localStorage.setItem(`${chairNumber}`, JSON.stringify(person))
        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i)
          let value = localStorage.getItem(key)
          reservedValue.push({ key: key, value: JSON.parse(value) })
          reservedValue.forEach((item) => {
            console.log(item)
            const ticket = `
            <div class="person-info d-flex top-0 p-2 justify-content-between gap-3 position-absolute end-0">
            <p class="name" id="name">${item.value.name}</p>
            <p class="surname" id="surname">${item.value.surname}</p>
            <span>${item.key}</span>
          </div>
            `

            ticketWrapper.innerHTML += ticket
          })
        }
      }
    }
  })
})
