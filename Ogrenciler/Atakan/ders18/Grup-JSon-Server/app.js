class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  //   static post(url, data) {
  //     return new Promise((resolve, reject) => {
  //       fetch(url, {
  //         method: "POST",
  //         body: JSON.stringify(data),
  //         headers: {
  //           "Content-type": "application/json;",
  //         },
  //       })
  //         .then((response) => response.json())
  //         .then((data) => resolve(data))
  //         .catch((err) => reject(err, "Hata Alındı."));
  //     });
  //   }
  //   static put(url, data) {
  //     return new Promise((resolve, reject) => {
  //       fetch(url, {
  //         method: "PUT",
  //         body: JSON.stringify(data),
  //         headers: {
  //           "Content-type": "application/json;",
  //         },
  //       })
  //         .then((response) => response.json())
  //         .then((data) => resolve(data))
  //         .catch((err) => reject(err, "Hata Alındı."));
  //     });
  //   }
  //   static delete(url) {
  //     return new Promise((resolve, reject) => {
  //       fetch(url, {
  //         method: "DELETE",
  //       })
  //         .then((response) => response.json())
  //         .then(() => resolve("Veri Silindi"))
  //         .catch((err) => reject(err, "Hata Alındı."));
  //     });
  //   }
}

Request.get("http://localhost:3000/users")
  .then((data) => UI.displayOnUi(data))
  .catch((err) => console.log(err));
