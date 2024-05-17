const cards = document.querySelector(".cards");
Request.fetchData("http://localhost:3000/users")
  .then((data) => {
    data.forEach((user) => {
      const card = UI.createCard(user.name, user.department, user.salary);
      cards.appendChild(card);
    });
  })
  .catch((err) => console.log(err));
