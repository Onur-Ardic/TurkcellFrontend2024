document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.getElementById("postsRow");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.slice(0, 9).forEach((post, index) => {
        if (index % 3 === 0 && index !== 0) {
          list.innerHTML += `<div class="w-100"></div>`; // Create a new row every 3 cards
        }
        list.innerHTML += `
          <div class="col-md-4">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src=https://picsum.photos/id/${post?.id + Math.floor(Math.random() * 100)}/200/300 class="img-fluid rounded-start" alt="Post Image">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${post?.title}</h5>
                    <p class="card-text">${post?.body}</p>
                    <p class="card-text"><small class="text-muted">User ID: ${post?.userId}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    } else {
      console.log("An error occurred, data could not be fetched.");
    }
  };
  xhr.send();
}
