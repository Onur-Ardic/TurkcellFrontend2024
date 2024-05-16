window.onload = function() {
    bloguGetir();
};

function bloguGetir(){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = function () {  
            if (this.status === 200) {
                const data = JSON.parse(xhr.responseText);
                let blogyazisi = document.getElementById("deneme");
                for (let i = 0; i < 20 && i < data.length; i++) {
                    let post = data[i];
                        blogyazisi.innerHTML +=`
                        <div class="row">
                            <div class="card border col-3" style="width: 25rem;">
                                <img class="card-img-top" src="https://picsum.photos/id/${post.id}/200/200" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title text-uppercase fs-5">${post.title}</h5>
                                    <p class="card-text ">${post.body}</p>
                                </div>
                            </div>
                        </div>    `;

                    }
            }else{
                console.log("bir hata oluştu,veriler alınamadı");
            }
        };
       xhr.send();
}