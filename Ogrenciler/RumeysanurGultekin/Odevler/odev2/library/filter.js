const ui = new UI();

document.getElementById("selectR").addEventListener("click", function() {
    ui.clearBookOnPage();
    Request.get("http://localhost:3000/books?categories=Roman")
        .then(data => {
            data.forEach(book => ui.createCard(book));
        })
        .catch(error => console.error(error, "Roman kategorisinde kitaplar getirilemedi."));
        console.log(data);
});

document.getElementById("selectK").addEventListener("click", function() {
    ui.clearBookOnPage();
    
    Request.get("http://localhost:3000/books?categories=Kişisel Gelişim")
        .then(data => {
            data.forEach(book => ui.createCard(book));
        })
        .catch(error => console.error(error, "Kişisel gelişim kategorisinde kitaplar getirilemedi."));
        console.log(data);
});

document.getElementById("selectC").addEventListener("click", function() {
    ui.clearBookOnPage();
    Request.get("http://localhost:3000/books?categories=Çocuk ve Gençlik")
        .then(data => {
            data.forEach(book => ui.createCard(book));
        })
        .catch(error => console.error(error, "Çocuk kategorisinde kitaplar getirilemedi."));
        console.log(data);
});

document.getElementById("sortA").addEventListener("click", function(){
    ui.clearBookOnPage();
    Request.get("http://localhost:3000/books?_sort=bookname&_order=asc")
        .then(data => ui.createCard(data))
        .catch(error => console.error(error, "Kitaplar sıralanamadı."));
})

document.getElementById("sortZ").addEventListener("click", function(){
    ui.clearBookOnPage();
    Request.get("http://localhost:3000/books?_sort=bookname&_order=desc")
        .then(data => ui.createCard(data))
        .catch(error => console.error(error, "Kitaplar sıralanamadı."));
})

document.getElementById("sortDate").addEventListener("click", function(){
    ui.clearBookOnPage();
    Request.get("http://localhost:3000/books?_sort=date&_order=asc")
        .then(data => ui.createCard(data))
        .catch(error => console.error(error, "Kitaplar sıralanamadı."));
})


document.getElementById("searchBookDiv").addEventListener("submit", function(e){
    e.preventDefault();
    ui.clearBookOnPage();
    let search = document.getElementById("searchBookName").value.trim();
    Request.get("http://localhost:3000/books?bookname_like=" + search)
        .then(data => ui.createCard(data));

});

document.getElementById("searchAuthorDiv").addEventListener("submit", function(e){
    e.preventDefault();
    ui.clearBookOnPage();
    let search = document.getElementById("searchAuthor").value.trim();
    Request.get("http://localhost:3000/books?author_like=" +search)
        .then(data => ui.createCard(data));
 
});