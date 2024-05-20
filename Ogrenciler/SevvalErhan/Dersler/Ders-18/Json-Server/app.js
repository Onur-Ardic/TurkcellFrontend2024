const usersDiv = document.getElementById("users");

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
}

class UI {
  static createCard(users) {
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("col-lg-3");
      userDiv.innerHTML = `
            <div class="card"">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.department}</p>
                    <p class="card-text">${user.salary}</p>
                </div>
            </div>
                `;
      usersDiv.appendChild(userDiv);
    });
  }
}

Request.get("http://localhost:3000/users").then((response) => {
  UI.createCard(response);
});
