class Request {
  static async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  static async post(url, postData) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      console.log("Failed to add new book.");
      return;
    }
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

  static async delete(id) {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });
    return response;
  }
}
