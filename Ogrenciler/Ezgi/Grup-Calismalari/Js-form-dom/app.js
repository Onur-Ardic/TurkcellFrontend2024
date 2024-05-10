let btn = document.querySelector('#saveBtn')
let form = document.querySelector(".form")
let users = []

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let name = document.querySelector("#name").value
    let surname = document.querySelector("#surname").value
    let age = document.querySelector("#age").value
    let city = document.querySelector("#city").value

    const userInfo = {
        name: name,
        surname: surname,
        age: age,
        city: city    
    }
    users.push(userInfo)

    const addCard = () => {
       let cardsDOM = document.querySelector(".cards")
       let cardDOM =  document.createElement('div')
       cardDOM.classList.add('card')
       cardDOM.style.backgroundColor = '#fdf5e6'
       cardDOM.style.padding = '20px 10px'

       let cardbodyDOM = document.createElement('div')
       cardbodyDOM.classList.add('card-body')

       let h4DOM = document.createElement('h4')
       h4DOM.classList.add('card-title')

       let pDOM = document.createElement('p')
       pDOM.classList.add('card-text')

       h4DOM.innerText = (`${name}  ${surname}`)
       pDOM.innerText = (`${age}
       ${city}`)

       cardsDOM.appendChild(cardDOM)
       cardDOM.appendChild(cardbodyDOM)
       cardbodyDOM.append(h4DOM, pDOM)

    }

    addCard()
    document.querySelector(".form").reset()
    console.log(users)
})