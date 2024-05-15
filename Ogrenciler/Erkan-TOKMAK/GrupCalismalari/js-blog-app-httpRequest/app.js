let blog = document.getElementById('blog');
let tarih = new Date();
tarih = tarih.toDateString();

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.send();
    xhr.onload = function () {
        console.log("xhr onload");
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(this.responseText);
            for (let i = 0; i < 20; i++) {
                blog.innerHTML += `
            <div class="col-4">
                <div class="card my-3">
                    <div class="card-header">
                        <img src="https://picsum.photos/seed/picsum/350/350" 
                        alt="blog-image" class="img-fluid rounded-3">
                    </div>
                    <div class="card-body" style="height: 250px">
                        <h5 class="text-truncate">${data[i].title}</h5>
                        <p>${data[i].body}</p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <p class="text-muted">Author: ${data[i].id}</p>
                            <p class="text-muted">Tarih: ${tarih}</p>
                        </div>
                    </div>
                </div>
            </div>
                `
            }
        } else {
            console.log('Bir hata oluştu, veriler alınamadı.');
        }
    }
    
}
window.addEventListener('load', getAllData);