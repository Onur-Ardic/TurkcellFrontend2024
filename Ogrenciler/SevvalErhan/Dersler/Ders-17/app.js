document.getElementById("getButton").addEventListener("click", getAllData);
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.getElementById("posts");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((user) => {
        list.innerHTML += `
        <tr>
          <td>${user.title}</td>
          <td>${user.body}</td>
        </tr>
        `;
      });
    } else {
      console.log("Bir hata oluştu, veriler alınamadı.");
    }
  };
  xhr.send();
}
