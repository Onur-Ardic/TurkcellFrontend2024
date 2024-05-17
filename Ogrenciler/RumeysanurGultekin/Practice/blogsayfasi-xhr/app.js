

function createBlog (post) {
     let deneme = document.getElementById("deneme");

     let card = document.createElement("div");
     card.classList.add("card" , "border" , "w-25") ;
     
    
     let img = document.createElement("img");
     img.classList.add("card-img-top");
     img.src = `https://picsum.photos/id/${post.id}/200/200` ;
     

     let cardBody = document.createElement("div");
     cardBody.classList.add("card-body");
     

     let h5 = document.createElement("h5");
     h5.classList.add("card-title" , "text-uppercase" , "fs-5");
     h5.innerHTML = post.title;
     cardBody.appendChild(h5);

     let p = document.createElement("p");
     p.classList.add("card-text");
     p.innerHTML = post.body;
     cardBody.appendChild(p);

     card.appendChild(img);
     card.appendChild(cardBody);
     deneme.appendChild(card);


}

window.onload = function() {
    bloguGetir();
};

function bloguGetir(){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = function () {  
            if (this.status === 200) {
                let blogyazisi = document.getElementById("deneme");
                const data = JSON.parse(xhr.responseText);
                for (let i = 0; i < 20 && i < data.length; i++) {
                    let post = data[i];
                        createBlog(post);
                        
                        // blogyazisi.innerHTML +=
                        // `<div class="d-flex">
                        //     <div class="card border" style="width: 25rem;">
                        //         <img class="card-img-top" src="https://picsum.photos/id/${post.id}/200/200" alt="Card image cap">
                        //         <div class="card-body">
                        //             <h5 class="card-title text-uppercase fs-5">${post.title}</h5>
                        //             <p class="card-text ">${post.body}</p>
                        //         </div>
                        //     </div>
                        // </div>    `;

                    }
            }else{
                console.log("bir hata oluştu,veriler alınamadı");
            }
        };
       xhr.send();
}