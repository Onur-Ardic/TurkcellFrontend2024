class Requests {
  static async get(category, language = "tr") {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&apiKey=223d61cd6e5a43d683afc6f5405454d3`
      );
      if (!response.ok) {
        throw new Error("Veri alınamadı");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default Requests;

// 9da1e84daa1142edb097ad9e12abaeb6
// 60b2c5d0f2a649e5bbaebe86e8f5257c
// 223d61cd6e5a43d683afc6f5405454d3