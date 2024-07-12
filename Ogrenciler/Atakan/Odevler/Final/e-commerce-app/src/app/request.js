class Request {
  static async get(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Veri alınamadı.");
    }
  }

  static async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error posting data:", error);
      throw new Error("Hata Alındı.");
    }
  }

  static async put(url, data) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error updating data:", error);
      throw new Error("Hata Alındı.");
    }
  }

  static async delete(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return "Veri Silindi";
    } catch (error) {
      console.error("Error deleting data:", error);
      throw new Error("Hata Alındı.");
    }
  }
}

export default Request;
