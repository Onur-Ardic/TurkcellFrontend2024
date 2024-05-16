class Request {
  static getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://jsonplaceholder.typicode.com/posts?_limit=20",
      true
    );
    xhr.onload = function () {
      let blogs = document.querySelector(".blogContainer");
      if (this.status === 200) {
        const datas = JSON.parse(this.response);
        datas.forEach((blog) => {
          blogs.innerHTML += `
                  <div class="card rounded-3">
                  <img class="card-img-top rounded-top-3"src="https://picsum.photos/id/${Math.floor(
                    Math.random() * 100
                  )}/200/300" alt="Blog Resmi">
                  <div class="card-body">
                      <h5 class="card-title text-uppercase fw-semibold">${
                        blog.title
                      }</h5>
                      <p class="card-text fst-italic">${blog.body}</p>
                  </div>
                  </div>
                  `;
        });
      }
    };
    xhr.send();
  }
}

document
  .getElementById("getButton")
  .addEventListener("click", Request.getAllData);
