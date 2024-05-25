const firstName = document.getElementById('name')
const surName = document.getElementById('surname')
const ticketWrapper = document.querySelector('.ticket-wrapper')
const alertBootstrap = document.getElementById('alert')
const seat = document.querySelectorAll('.chair')

let name = ''
let surname = ''

window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    const chosenChair = localStorage.key(i)
    const reservedPerson = JSON.parse(localStorage.getItem(chosenChair))

    seat.forEach((chairElement) => {
      if (chairElement.innerText === chosenChair) {
        chairElement.style.backgroundColor = 'green'
        chairElement.style.color = 'white'
        displayTicket(reservedPerson)
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
    alertBootstrap.textContent = ''
    alertBootstrap.classList.remove(alert)
  }, 3000)
}

seat.forEach((seatValue) => {
  seatValue.addEventListener('click', () => {
    const isReserved = localStorage.getItem(seatValue.textContent)
    if (isReserved) {
      const reservedPerson = JSON.parse(isReserved)
      deleteItem(seatValue, reservedPerson)
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

  const value = confirm(`${seatNumber.textContent} , Rezervasyon işlemini onaylıyor musunuz ?`)

  if (value) {
    checkSeat(seatNumber, person)
  } else {
    alertFunction('alert-danger', 'Rezervasyon işlemi iptal edildi')
    return
  }
}

function checkSeat(seatNumber, person) {
  seatNumber.style.backgroundColor = 'green'
  seatNumber.style.color = 'white'
  localStorage.setItem(`${person.seat}`, JSON.stringify(person))
  alertFunction('alert-primary', 'Rezervasyon işlemi başarıyla tamamlandı')
  displayTicket(person)
}

function deleteItem(seatNumber, person) {
  const value = confirm(
    `${person.seat} Numaralı Koltuğun Rezervasyonunu İptal Etmek İstiyor musunuz?`,
  )
  if (value) {
    seatNumber.style.backgroundColor = 'white'
    seatNumber.style.color = 'black'
    localStorage.removeItem(`${person.seat}`)
    alertFunction('alert-primary', 'Rezervasyon işlemi iptal edildi')
    removeTicket(person)
  } else {
    alertFunction('alert-danger', 'Rezervasyon işlemi iptal edilemedi')
  }
}

function displayTicket(person) {
  const ticketCard = document.createElement('div')
  ticketCard.classList.add(
    'ticket-card-reserved',
    'rounded-1',
    'p-2',
    'bg-dark',
    'text-white',
    'position-relative',
    'd-flex',
    'mb-2',
  )

  ticketCard.innerHTML = `
    <div class="person-info d-flex top-0 p-2 justify-content-between gap-3 position-absolute end-0">
      <p class="name">${person.name}</p>
      <p class="surname">${person.surname}</p>
      <span>${person.seat}</span>
    </div>
  `

  ticketWrapper.appendChild(ticketCard)
}

function removeTicket(person) {
  const tickets = ticketWrapper.querySelectorAll('.ticket-card-reserved')
  tickets.forEach((ticket) => {
    if (
      ticket.querySelector('.name').textContent === person.name &&
      ticket.querySelector('.surname').textContent === person.surname &&
      ticket.querySelector('span').textContent === person.seat
    ) {
      ticketWrapper.removeChild(ticket)
    }
  })
}
