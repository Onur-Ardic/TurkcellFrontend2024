
let btn = document.querySelector('#saveBtn')
let form = document.querySelector(".form")
// let inputs = document.querySelectorAll('input')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let name = document.querySelector("#name").value
    let surname = document.querySelector("#surname").value
    let age = document.querySelector("#age").value
    let city = document.querySelector("#city").value
    // let img = document.querySelector("#img-file").value

    let users = []
    const userInfo = {
        name: name,
        surname: surname,
        age: age,
        city: city
        // img: img
    }
    users.push(userInfo)

    // inputs.addEventListener("focus", function(input){
    //     input.style.border = '1px solid blue'
    // })

    const addCard = () => {
       let cardsDOM = document.querySelector(".cards")
    //    let imgDOM = document.createElement('img')
    //    imgDOM.classList.add('card-img-top') 
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
       cardDOM.append(cardbodyDOM)
       cardbodyDOM.append(h4DOM, pDOM)

    }

    addCard()
    document.querySelector(".form").reset()
    console.log(users)


})