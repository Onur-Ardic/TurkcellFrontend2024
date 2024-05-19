const row = document.getElementById("row")

const url = "http://localhost:3000/users"

class Request {
    async get(url) {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Veriler alınamadı!")
        }
        const data = await response.json()
        return data
    }
}

const req = new Request()

const data = req.get(url).then((data) => {
    data.forEach((data) => {
        const col = document.createElement("div")
        col.className = "col-6 text-center"

        const card = document.createElement("div")
        card.className = "card my-3"
        col.appendChild(card)

        const pCardName = document.createElement("p")
        pCardName.className = "fw-bold text-danger"
        const cardName = document.createTextNode(`${data.name}`)
        pCardName.appendChild(cardName)
        card.appendChild(pCardName)

        const pCardDepartment = document.createElement("p")
        const cardDepartment = document.createTextNode(`${data.department}`)
        pCardDepartment.appendChild(cardDepartment)
        card.appendChild(pCardDepartment)

        const pCardSalary = document.createElement("p")
        const cardSalary = document.createTextNode(`${data.salary}`)
        pCardSalary.appendChild(cardSalary)
        card.appendChild(pCardSalary)

        row.appendChild(col)
    })
}).catch((error) => console.log(error, "Hata!!!"))