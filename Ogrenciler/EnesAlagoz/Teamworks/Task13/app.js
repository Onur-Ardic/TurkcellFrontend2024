document.getElementById("getButton").addEventListener("click", getAllData);
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.querySelector("#cards");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((post) => {
        let random = Math.round(Math.random() * 100);
        if (post.id <= 20) {
          list.innerHTML += Post.createPost(post.title, post.body, random);
        }
      });
    } else {
      console.log("Bir hata oluştu, veriler alınamadı.");
    }
  };
  xhr.send();
}
