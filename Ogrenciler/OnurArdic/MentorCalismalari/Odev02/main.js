const firstName = document.getElementById('name')
const surName = document.getElementById('surname')
const ticketWrapper = document.querySelector('.ticket-wrapper')
const ticketName = document.getElementById('ticket-name')
const ticketSurname = document.getElementById('ticket-surname')
const ticketChair = document.getElementById('ticket-chair')
const alertBootstrap = document.getElementById('alert')
const reservedValue = []

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const chosenChair = localStorage.key(i)

    const chairs = document.querySelectorAll('.chair')

    chairs.forEach((chairElement) => {
      if (chairElement.innerText === chosenChair) {
        chairElement.style.backgroundColor = 'green'
        chairElement.style.color = 'white'
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
        localStorage.removeItem(chairNumber)
      }
    } else {
      const value = confirm(
        `${chairNumber} Numaralı Koltuğu Rezerve Edeceksiniz Onaylıyor musunuz?`,
      )

      if (firstName.value == '') {
        const alertText = document.createTextNode('İsim ve soyisim alanı boş bırakılamaz')
        alertBootstrap.innerHTML = ''
        alertBootstrap.appendChild(alertText)
        alertBootstrap.style.border = '3px solid red'
        return
      }

      if (value === true) {
        const person = {
          name: firstName.value,
          surname: surName.value,
          chairNumber: chairNumber,
        }
        chairİtem.style.backgroundColor = 'green'
        chairİtem.style.color = 'white'
        localStorage.setItem(`${chairNumber}`, JSON.stringify(person))
        if (ticketChair.innerText === person.chairNumber) {
          console.log('if çalıştı')
          ticketChair.innerText = person.chairNumber
        } else {
          console.log('else çalıştı')
          ticketChair.innerText += ', ' + person.chairNumber
          ticketName.innerText = `${person.name} `
          ticketSurname.innerText = `${person.surname} `
        }
      }
    }
  })
})
