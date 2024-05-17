/*function getTextFile() {
  fetch("text.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getTextFile();
*/

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alinamadi."));
    });
  }
  static post(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alinamadi."));
    });
  }
}

//delete ve put kismida var.
