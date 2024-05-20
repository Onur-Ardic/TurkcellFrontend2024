class UI {
  static displayUser(users) {
    const userList = document.getElementById("userList");

    userList.textContent = "";
    users.forEach((user) => {
      userList.innerHTML += `
    <div class="card rounded-3">
    <div class="card-body">
        <h5 class="card-title ">
        ${user.name}
        </h5>
        <p class="card-text">${user.department}</p>
        <p class="card-text">${user.salary}</p>

    </div>
    </div>
    `;
    });
  }
}
