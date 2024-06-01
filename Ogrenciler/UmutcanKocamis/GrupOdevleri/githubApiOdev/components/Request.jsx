class Request {
  static async get(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "apikey 4YybeDkkDoYBY0gAnpEiaf:492kTWobTcJIPmPas5l5nU",
        },
      });
      if (!response.ok) throw new Error("Hava durumu getirilemedi.");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default Request;
