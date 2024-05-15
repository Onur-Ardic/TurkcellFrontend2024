class Request {
    static getAllData() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = function () {
            let cards = document.querySelector(".cardContainer")
            if (this.status === 200) {
                const datas = JSON.parse(this.response).splice(0, 20)
                datas.forEach((card) => {
                    cards.innerHTML += `
                    <div class="card rounded-4" style="width: 18rem;">
                    <img src="https://picsum.photos/id/${Math.floor(Math.random() * 100)}/200/300" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.body}</p>
                    </div>
                    </div>
                    `
                })
            }
        }
        xhr.send();
    }
}

Request.getAllData()