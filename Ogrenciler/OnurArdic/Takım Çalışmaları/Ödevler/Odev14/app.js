const cardWrapper = document.querySelector('.card-wrapper')

class uı {
  static cardFunction(title, text, salary) {
    let div = document.createElement('div')
    div.classList.add('card')

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = title

    let cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText = text

    let salaryText = document.createElement('p')
    salaryText.classList.add('card-text')
    salaryText.innerText = salary

    div.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(salaryText)

    return div
  }
}
class Request {
  static getAllData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((person) => {
          const div = uı.cardFunction(person.name, person.department, person.salary)
          cardWrapper.appendChild(div)
        })
      })
      .catch((error) => console.log(error))
  }
}

Request.getAllData('http://localhost:3000/users')
