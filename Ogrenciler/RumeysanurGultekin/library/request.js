class Request {
  constructor(url){
            this.url = url;
        }
        static get(url) {
          fetch(`${url}`)
              .then((response) => response.json())
              .then((data) => {
                  const ui = new UI(); // UI sınıfından bir örnek oluştur
                  data.forEach((book) => {
                      ui.createCard(book); // UI sınıfındaki createCard metodu ile kitap kartını oluştur
                  });
              })
              .catch((err) => console.error(err, "Veri alınamadı."));
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
   static delete(url, id) {
      fetch(`${url}/${id}`, { // URL'ye id'yi ekleyerek silinecek kitabı belirtiyoruz
          method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => console.log("Veri Silindi")) // Silme başarılı olduğunda bir mesaj yazdırabiliriz
      .catch((err) => console.error(err, "Hata Alındı."));
}
    static update(url, id, newData) {
      fetch(`${url}/${id}`, {
          method: "PUT",
          body: JSON.stringify(newData),
          headers: {
              "Content-type": "application/json;",
          },
      })
      .then(response => response.json())
      .then(() => console.log("Veri Güncellendi"))
      .catch((err) => console.error(err, "Hata Alındı."));
    }
  // static delete(url) {
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((response) => response.json())
  //       .then(() => resolve("Veri Silindi"))
  //       .catch((err) => reject(err, "Hata Alındı."));
  //   };
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