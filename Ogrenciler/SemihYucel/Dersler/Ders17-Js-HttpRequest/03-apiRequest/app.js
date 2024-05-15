document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=20", true);
    xhr.onload = function() {
        let list = document.getElementById("posts");
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            list.innerHTML = ""; 
            data.forEach((post) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td></td>
                `;
                list.appendChild(row);

                const imageXhr = new XMLHttpRequest();
                imageXhr.open("GET", 'https://picsum.photos/200/300', true);
                imageXhr.responseType = 'blob';
                imageXhr.onload = function() {
                    if (this.status === 200) {
                        const imageUrl = URL.createObjectURL(this.response);
                        const imageElement = document.createElement('img');
                        imageElement.src = imageUrl;
                        imageElement.classList.add('img-thumbnail');
                        row.querySelector('td:last-child').appendChild(imageElement);
                    } else {
                        console.error('Resim yüklenirken hata oluştu.');
                    }
                };
                imageXhr.send();
            });
        } else {
            console.error("Veri alınamadı.");
        }
    };
    xhr.send();
}
