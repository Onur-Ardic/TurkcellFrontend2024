const name = document.getElementById('name')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const address = document.getElementById('address')
const form = document.getElementById('form')
const inputs = document.querySelectorAll('input')
const cardWrapper = document.getElementById('cardWrapper')
const personArray = []

console.log(personArray)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formName = name.value
  const formSurname = surname.value
  const formAge = age.value
  const formAddress = address.value

  const person = {
    name: formName,
    surname: formSurname,
    age: formAge,
    address: formAddress,
  }

  personArray.push(person)

  inputs.forEach((input) => {
    input.value = ''
    input.style.border = '1px solid blue'
  })

  const result = `
      <div class="card-body">
        <h5 class="card-title" id="name">${person.name}</h5>
        <p class="card-text" id="surname">${person.surname}</p>
        <p class="card-text" id="age">${person.age}</p>
        <p class="card-text" id="address">${person.address}</p>
    </div>
  `

  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = result

  cardWrapper.appendChild(card)
})
