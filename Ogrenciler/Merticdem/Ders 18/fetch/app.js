function getTextFile() {
  fetch("text.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function getJsonFile() {
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function getApi() {
  fetch("https://api.exchangeratesapi.io/latest")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getApi();

class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => resolve("Veri silme işlemi başarılı"))
        .catch((error) => reject(error));
    });
  }
}
Request.get("https://api.exchangeratesapi.io/latest").then((data) =>
  console.log(data).catch((error) => console.log(error))
);
