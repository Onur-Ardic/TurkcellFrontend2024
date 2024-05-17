let blogs = document.querySelector(".blogContainer");

class UI {
  static displayOnUi(data) {
    data.forEach((user) => {
      blogs.innerHTML += `
        <div class="card rounded-3">
        <div class="card-body">
            <h5 class="card-title text-uppercase fw-semibold">User: ${user.name}</h5>
            <p class="card-text fst-italic">Department: ${user.department}</p>
            <p class="card-text fst-italic">Salary: ${user.salary}</p>
            <p class="card-text fst-italic"> ID: ${user.id}</p>
        </div>
        </div>
        `;
    });
  }
}
