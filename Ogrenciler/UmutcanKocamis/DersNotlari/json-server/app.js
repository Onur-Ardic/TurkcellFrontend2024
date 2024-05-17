class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
}

const req = new Request();
let cards = document.querySelector("#cards");

req
  .get("db.json")
  .then((data) => {
    for (let i = 0; i < 4; i++) {
      cards.innerHTML += `
      <div class ="col-2">
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.users[i].name} </h5>
    <p class="card-text">${data.users[i].department}</p>
    <p class="card-text">${data.users[i].salary}</p>

  </div>
</div>
</div>`;
    }
  })
  .catch((err) => alert(err));
