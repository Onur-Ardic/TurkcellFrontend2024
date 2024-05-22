class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Bir hata oluştu, veri alınamadı!"));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Bir hata oluştu."));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Bir hata oluştu."));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri Silindi"))
        .catch((err) => reject(err, "Veri silinemedi."));
    });
  }
}
