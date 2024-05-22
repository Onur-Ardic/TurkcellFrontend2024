const ui = new UI();
let editId;
let editStatus = false;

window.addEventListener("load",() => {
    noRefreshPage();
})

function validateForm() {
    let isValid = true;
    const fields = [ui.bookName, ui.author, ui.category, ui.date, ui.imgUrl];

    fields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add("error");
        } else {
            field.classList.remove("error");
        }
    });

    return isValid;
}
function noRefreshPage() {
    Request.get("http://localhost:3000/books")
        .then(data => ui.displayBooks(data));
}

ui.bookForm.addEventListener("submit",async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    if(!editStatus){
        const book = await new Book(crypto.randomUUID(),ui.bookName.value,ui.author.value,ui.category.value,ui.date.value,ui.imgUrl.value);
        await Request.post("http://localhost:3000/books",book);
    }else{
        const editBook = await new Book(editId,ui.bookName.value,ui.author.value,ui.category.value,ui.date.value,ui.imgUrl.value);
        await Request.put(`http://localhost:3000/books/${editId}`,editBook);
        ui.bookForm.querySelector("button").textContent = "Submit";
        editStatus = false;
    }
    ui.bookForm.reset();
    ui.bookAddBtn.click();
    noRefreshPage();
})

function deleteBook(id){
    Request.delete(`http://localhost:3000/books/${id}`)
        .then(() => noRefreshPage());
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
    let url = "http://localhost:3000/books";

    switch (key) {
        case "1":
            url += "?_sort=name";
        break;
        case "2":
            url += "?_sort=name&_order=desc";
        break;
        case "3":
            url += "?_sort=date";
        break;
    }

    Request.get(url)
        .then(data => ui.displayBooks(data));
})

ui.searchName.addEventListener("input",(e) => {
    let key = e.target.value;
    Request.get(`http://localhost:3000/books?name_like=${key}`)
        .then(data => ui.displayBooks(data));
})

ui.searchAuthor.addEventListener("input",(e) => {
    let key = e.target.value;
    Request.get(`http://localhost:3000/books?author_like=${key}`)
        .then(data => ui.displayBooks(data));
})

ui.searchCategory.addEventListener("change",(e) => {
    const key = e.target.value;
    let url = "http://localhost:3000/books";

    if (key) {
        url += `?category=${key}`;
    }

    Request.get(url)
        .then(data => ui.displayBooks(data));
})