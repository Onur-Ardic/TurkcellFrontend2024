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

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = user.name;

      const cardDepartment = document.createElement("p");
      cardDepartment.classList.add("card-text");
      cardDepartment.textContent = user.department;

      const cardSalary = document.createElement("p");
      cardSalary.classList.add("card-text");
      cardSalary.textContent = user.salary;

      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardDepartment);
      cardBodyDiv.appendChild(cardSalary);

      cardDiv.appendChild(cardBodyDiv);
      userDiv.appendChild(cardDiv);
      usersDiv.appendChild(userDiv);
    });
  }
}

Request.get("http://localhost:3000/users").then((response) => {
  UI.createCard(response);
});
