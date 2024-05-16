const cards = document.getElementById("cards");
const image = document.querySelector(".card-img-top");
let imgId = Math.floor(Math.random() * 100);
let postId = Math.floor(Math.random() * 80);
class Request {
  static getPost() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.slice(postId, postId + 21).forEach((post) => {
          const card = UI.createCard(post.title, post.body);
          imgId++;
          cards.appendChild(card);
        });
      } else {
        console.log("Bir hata oluştu.");
      }
    };
    xhr.send();
  }
}
