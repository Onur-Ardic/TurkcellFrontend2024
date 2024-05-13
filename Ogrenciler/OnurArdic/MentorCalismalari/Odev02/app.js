const firstName = document.getElementById('name')
const surName = document.getElementById('surname')
const ticketWrapper = document.querySelector('.ticket-wrapper')
const ticketName = document.getElementById('ticket-name')
const ticketSurname = document.getElementById('ticket-surname')
const ticketChair = document.getElementById('ticket-chair')
const alertBootstrap = document.getElementById('alert')
const seat = document.querySelectorAll('.chair')

let name = ''
let surname = ''

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const chosenChair = localStorage.key(i)

    seat.forEach((chairElement) => {
      if (chairElement.innerText === chosenChair) {
        chairElement.style.backgroundColor = 'green'
        chairElement.style.color = 'white'
      }
    })
  }
}

firstName.addEventListener('input', (e) => {
  name = e.target.value
})

surName.addEventListener('input', (e) => {
  surname = e.target.value
})

function alertFunction(alert, alertText) {
  alertBootstrap.textContent = alertText
  alertBootstrap.classList.add(alert)

  setTimeout(() => {
    alertText.textContent = ''
    alertBootstrap.classList.remove(alert)
  }, 3000)
}
seat.forEach((seatValue) => {
  seatValue.addEventListener('click', () => {
    const isReserved = localStorage.getItem(seatValue.textContent)
    if (isReserved) {
      const reservedPerson = JSON.parse(isReserved)
      deleteİtem(seatValue, reservedPerson)
    } else {
      if (name && surname) {
        chooseChair(seatValue)
      } else {
        alertFunction('alert-danger', 'İsim ve soyisim alanları boş bırakılamaz')
      }
    }
  })
})

function chooseChair(seatNumber) {
  const person = {
    name: name,
    surname: surname,
    seat: seatNumber.textContent,
  }

  const value = confirm(`${seat} , Rezervasyon işlemini onaylıyor musunuz ?`)

  if (value) {
    checkSeat(seatNumber, person)
  } else {
    alertFunction('alert-danger', 'Rezervasyon işlemi iptal edildi')
    return
  }
}

function checkSeat(seatNumber, person) {
  console.log(seatNumber)
  seatNumber.style.backgroundColor = 'green'
  seatNumber.style.color = 'white'
  localStorage.setItem(`${person.seat}`, JSON.stringify(person))
  alertFunction('alert-primary', 'Rezervasyon işlemi başarıyla tamamlandı')
}

function deleteİtem(seatNumber, person) {
  const value = confirm(
    `${person.seat} Numaralı Koltuğun Rezervasyonunu İptal Etmek İstiyor musunuz?`,
  )
  if (value) {
    seatNumber.style.backgroundColor = 'white'
    seatNumber.style.color = 'black'
    localStorage.removeItem(`${person.seat}`)
    alertFunction('alert-primary', 'Rezervasyon işlemi iptal edildi')
  } else {
    alertFunction('alert-danger', 'Rezervasyon işlemi iptal edilemedi')
  }
}
