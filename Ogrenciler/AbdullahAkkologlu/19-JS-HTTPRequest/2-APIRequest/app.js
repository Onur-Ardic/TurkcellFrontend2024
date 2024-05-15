const button = document.getElementById("getButton");
const list = document.getElementById("posts");
button.addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((post) => {
        list.innerHTML += `
                <tr>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>`;
      });
    } else {
      console.log("Bir hata oluştu.");
    }
  };
  xhr.send();
}
