export async function getNews(category = "") {
  const apikey = "f1a317f52e99449487423ae4c3d364a0";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data.articles.slice(0, 10);
  } catch (error) {
    console.error("Fetch error: ", error.message); //pop-up ile değiştir.
    throw error;
  }
}
