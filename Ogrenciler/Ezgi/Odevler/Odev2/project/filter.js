const sienceFiction = document.querySelector('#science-fiction')
const poem = document.querySelector('#poem')
const detective = document.querySelector('#detective')
const historical = document.querySelector('#historical')
const horrorThriller = document.querySelector('#horror-thriller')
const love = document.querySelector('#love')
const kid = document.querySelector('#kid')
const sortA = document.querySelector('#sortA')
const sortZ = document.querySelector('#sortZ')
const sortDate = document.querySelector('#sortDate')


sienceFiction.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Bilim-Kurgu")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book))
            console.log(data);
        })
        .catch(error => console.error(error, "Bilim-Kurgu kategorisinde kitaplar getirilemedi."));
        
});

poem.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Şiir")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book));
            console.log(data);
        })
        .catch(error => console.error(error, "Şiir kategorisinde kitaplar getirilemedi."));
        
});

detective.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Polisiye")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book));
            console.log(data);
        })
        .catch(error => console.error(error, "Polisiye kategorisinde kitaplar getirilemedi."));
        
});
historical.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Tarihi")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book));
            console.log(data);
        })
        .catch(error => console.error(error, "Tarihi kategorisinde kitaplar getirilemedi."));
        
});
horrorThriller.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Korku-Gerilim")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book));
            console.log(data);
        })
        .catch(error => console.error(error, "Korku-Gerilim kategorisinde kitaplar getirilemedi."));
        
});
love.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Aşk")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book));
            console.log(data);
        })
        .catch(error => console.error(error, "Aşk kategorisinde kitaplar getirilemedi."));
        
});
kid.addEventListener("click", function() {
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?category=Çocuk")
        .then(data => {
            data.forEach(book => UI.displayBooksUI(book));
            console.log(data);
        })
        .catch(error => console.error(error, "Çocuk kategorisinde kitaplar getirilemedi."));
        
});
sortA.addEventListener("click", function(){
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?_sort=nameBook&_order=asc")
        .then(data => UI.displayBooksUI(data))
        .catch(error => console.error(error, "Kitaplar sıralanamadı."));
})

sortZ.addEventListener("click", function(){
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?_sort=nameBook&_order=desc")
        .then(data => UI.displayBooksUI(data))
        .catch(error => console.error(error, "Kitaplar sıralanamadı."));
})

document.getElementById("sortDate").addEventListener("click", function(){
    UI.removeBooksUI()
    Request.get("http://localhost:3000/books?_sort=date&_order=asc")
        .then(data => UI.displayBooksUI(data))
        .catch(error => console.error(error, "Kitaplar sıralanamadı."));
})