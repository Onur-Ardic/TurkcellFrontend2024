class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Hata oluştu !");
    }
    const data = await response.json();
    return data;
  }
}

const request = new Request();

request
  .get("http://localhost:3000/users")
  .then((data) => UI.displayUser(data))
  .catch((error) => console.log(error));
