document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        let list = document.getElementById("posts");
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            data.forEach((post) => {
                const imageUrl = `https://picsum.photos/200/300?random=${post.id}`;
                list.innerHTML += `
                    <div class="post">
                        <img src="${imageUrl}" alt="Post Image">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;
            });
        } else {
            console.log("Bir hata oluştu, veriler alınamadı.");
        }
    };
    xhr.send();
}
