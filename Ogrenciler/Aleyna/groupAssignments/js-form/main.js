const name = document.getElementById('name')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const address = document.getElementById('address')
const form = document.getElementById('form')
const inputs = document.querySelectorAll('input')

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

  console.log(person)

  const personİnfo = JSON.stringify(person)

  console.log(personİnfo)

  alert(personİnfo)

  inputs.forEach((input) => {
    input.value = ''
    input.style.border = '1px solid blue'
  })
})
