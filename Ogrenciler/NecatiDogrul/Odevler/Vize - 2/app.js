// Request.get('http://localhost:3000/books').then((books)=>{
//     books.forEach(book => {
//         const newBook = new Book(book.id,book.title,book.author,book.category,book.publishedDate,book.coverImageUrl);
//         UI.addBookToUI(newBook);
//     });
// }).catch(err => console.log(err));


UI.displayBooks();