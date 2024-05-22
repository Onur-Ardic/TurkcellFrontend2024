class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Silme işlemi sırasında bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
  async update(url, newData) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json;",
      },
    });
    console.log(url);
    if (!response.ok) {
      throw new Error("Güncelleme işlemi sırasında bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
  async post(url, newData) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json;",
      },
    });
    if (!response.ok) {
      throw new Error("Ekleme işlemi sırasında bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
}
export { Request };
