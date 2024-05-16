document.getElementById("getButton").addEventListener("click", getAllData);
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let cards = document.getElementById("cards");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const limitedData = data.slice(0, 20);
      //https://picsum.photos/300/185
      limitedData.forEach((user) => {
       // xhr.open("GET", "https://picsum.photos/300/185", true);
        const randomImage = `https://picsum.photos/id/${Math.round((Math.random()*5))+10}/300/185`
        const card = document.createElement("div");
        const limitedTitle = user.body.length > 50 ? user.body.substring(0, 50) + '...' : user.body; 
        cards.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src=${randomImage} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${user.title}</h5>
              <p class="card-text">${limitedTitle}</p>
              <a href="#" class="btn btn-primary" id="oku">Devamını Oku</a>
            </div>
        </div>       
        `;
      });
      
    } 
    else {
      console.log("Bir hata oluştu, veriler alınamadı.");
    }
    // const okuButton = document.getElementById("oku");
    // okuButton.addEventListener("click",()=>{
    //   window.open("https://jsonplaceholder.typicode.com/posts/"+user.id)
    // });



  };
  xhr.send();
}


// list.innerHTML += `
// <tr>
//   <td>${user.title}</td>
//   <td>${user.body}</td>
// </tr>
// 