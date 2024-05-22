class Request {
  static get(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }

  static post(url, data) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err, "Hata Alındı."));
  }

  static put(url, data) {
    return fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err, "Hata Alındı."));
  }

  static async delete(url) {
    return await fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
}
Request.get("http://localhost:3000/books/");
