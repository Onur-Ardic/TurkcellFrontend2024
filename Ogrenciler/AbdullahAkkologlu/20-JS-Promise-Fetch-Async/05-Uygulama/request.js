class Request {
  static async fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
}
