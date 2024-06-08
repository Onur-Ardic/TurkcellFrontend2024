


class Requests {
    static async get(category) {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=9da1e84daa1142edb097ad9e12abaeb6`);
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