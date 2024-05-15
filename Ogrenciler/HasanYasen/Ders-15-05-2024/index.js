const getUsersBtn = document.getElementById("getUsersBtn")
getUsersBtn.addEventListener("click", getUsers)

function getUsers() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "users.json", "true")
    xhr.onload = function () {
        const userList = document.getElementById("userList")
        if (this.status === 200) {
            const users = JSON.parse(this.responseText)
            console.log(users)
            users.forEach((user) => {
                userList.innerHTML += `
                <div>
                <p>${user.id}</p>
                <p>${user.name}</p>
                <p>${user.surname}</p>
                </div>
                `
            })
        } else {
            console.log("Bir hata var!!!")
        }
    }
    xhr.send()
}