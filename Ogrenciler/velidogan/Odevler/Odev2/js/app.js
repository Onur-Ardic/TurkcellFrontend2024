const ui = new UI();
let editId;
let editStatus = false;

window.addEventListener("load",() => {
    Request.get("http://localhost:3000/books"," ")
        .then(data => ui.displayBooks(data));
})

ui.bookForm.addEventListener("submit",async (e) => {
    if(!editStatus){
        const book = await new Book(crypto.randomUUID(),ui.bookName.value,ui.author.value,ui.category.value,ui.date.value,ui.imgUrl.value);
        Request.post("http://localhost:3000/books",book);
    }else{
        const editBook = await new Book(editId,ui.bookName.value,ui.author.value,ui.category.value,ui.date.value,ui.imgUrl.value);
        Request.put("http://localhost:3000/books",editBook,editId);
        ui.bookForm.querySelector("button").textContent = "Submit";
    }
})

function deleteBook(id){
    Request.delete("http://localhost:3000/books",id)
}

function selectedBook(book) {
    editId = book.id;
    editStatus = true;
    ui.bookName.value = book.name;
    ui.author.value = book.author;
    ui.category.value = book.category;
    ui.date.value = book.date;
    ui.imgUrl.value = book.imgUrl;
    ui.bookForm.querySelector("button").textContent = "Update";
    ui.bookAddBtn.click();
}

ui.sort.addEventListener("change",(e) => {
    const key = e.target.value;
    switch (key) {
        case "1":
            Request.get("http://localhost:3000/books?_sort=","name")
                .then(data => ui.displayBooks(data));
        break;
        case "2":
            Request.get("http://localhost:3000/books?_sort=name","&_order=desc")
                .then(data => ui.displayBooks(data));
        break;
        case "3":
            Request.get("http://localhost:3000/books?_sort=","date")
                .then(data => ui.displayBooks(data));
        break;
        default:
            Request.get("http://localhost:3000/books","")
                .then(data => ui.displayBooks(data));
        break;
    }
})

ui.searchName.addEventListener("input",(e) => {
    let key = e.target.value;
    Request.get("http://localhost:3000/books?name_like=",key)
        .then(data => ui.displayBooks(data));
})

ui.searchAuthor.addEventListener("input",(e) => {
    let key = e.target.value;
    Request.get("http://localhost:3000/books?author_like=",key)
        .then(data => ui.displayBooks(data));
})

ui.searchCategory.addEventListener("change",(e) => {
    const key = e.target.value;
    switch (key) {
        case "Novel":
            Request.get("http://localhost:3000/books?category=","Novel")
                .then(data => ui.displayBooks(data));
        break;
        case "Historical":
            Request.get("http://localhost:3000/books?category=","Historical")
                .then(data => ui.displayBooks(data));
        break;
        case "Religious":
            Request.get("http://localhost:3000/books?category=","Religious")
                .then(data => ui.displayBooks(data));
        break;
        default:
            Request.get("http://localhost:3000/books","")
                .then(data => ui.displayBooks(data));
        break;
    }
})