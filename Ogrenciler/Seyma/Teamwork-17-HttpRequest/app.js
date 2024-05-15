document.getElementById("getButton").addEventListener("click", getAllData);
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.getElementById("posts");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((post) => {
        list.innerHTML += `

         <h3> ${post.title}</h3>
         <p ${post.body} </p>
         
        `;
      });
    } else {
      console.log("Bir hata oluştu, veriler alınamadı.");
    }
  };
  xhr.send();
}
