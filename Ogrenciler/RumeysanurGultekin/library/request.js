class Request {
  constructor(url){
            this.url = url;
        }

  static get(url) {
      fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => reject(err, "Veri alınamadı."));
  }
  static post(url, data) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then(response => console.log(response.json()))
      .then(response => {
        console.log("response:"+JSON.stringify(data)); alert("Book Added!")
      })
      .then((data) => console.log(data))
  }
  static delete(url) {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri Silindi"))
        .catch((err) => reject(err, "Hata Alındı."));
    };
}

function resolve(data){
  console.log(data);
}




// class getData {
//   static sendDataBook(book) {
//     Request.post('http://localhost:3000/books', {
//       image: book.image,
//       bookname: book.bookname,
//       author: book.author,
//       date: book.date,
//       categories: book.categories,
//       id: book.id,
//     });
//   }

//   static deleteBook(bookId) {
//     Request.delete(`http://localhost:3000/books/${bookId}`)
//       .then(() => {
//         console.log(`${bookId} kitabı başarıyla silinmiştir`);
//       })
//       .catch((err) => console.error(err));
//   }
// }