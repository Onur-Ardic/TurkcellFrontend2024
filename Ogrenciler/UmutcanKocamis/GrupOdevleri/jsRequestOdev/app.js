document.getElementById("getButton").addEventListener("click", getAllData);
const post = new Post();
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.querySelector(".card");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((post) => {
        if (post.id <= 20) {
          list.innerHTML += `
          <img src="https://picsum.photos/id/${Post.randomNumber()}/200/300">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          `;
        }
      });
    } else {
      console.log("Bir hata oluştu, veriler alınamadı.");
    }
  };
  xhr.send();
}
