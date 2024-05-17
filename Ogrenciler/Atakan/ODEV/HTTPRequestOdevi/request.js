class Request {
  static getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
      let blogs = document.querySelector(".blogContainer");
      const createRandomNumber = () => Math.floor(Math.random() * 100);
      if (this.status === 200) {
        const datas = JSON.parse(this.response);
        datas.forEach((blog) => {
          if (blog.id <= 20) {
            blogs.innerHTML += `
            <div class="card rounded-3">
            <img class="card-img-top rounded-top-3"src="https://picsum.photos/id/${createRandomNumber()}/200/300" alt="Blog Resmi">
            <div class="card-body">
                <h5 class="card-title text-uppercase fw-semibold">${
                  blog.title
                }</h5>
                <p class="card-text fst-italic">${blog.body}</p>
            </div>
            </div>
            `;
          }
        });
      } else {
        console.log("Hata: Hiç veri alınamadı.");
      }
    };
    xhr.send();
  }
}
