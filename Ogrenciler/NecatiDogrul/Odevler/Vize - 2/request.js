class Request {
  static async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return response;
  }

  static async post(url, postData) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();
    return responseData;
  }

  static async put(url, putData) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(putData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  }

  static async getBookById(id) {
    const response = await fetch(`http://localhost:3000/books/${id}`);
    const data = await response.json();
    return data;
  }

  static async getAllBooks() {
    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();
    return data;
  }
}
