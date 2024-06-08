
export const get = async (category) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-06-06&to=2024-06-06&sortBy=popularity&apiKey=1e7601b539dc4e6091887f58a459b6e8`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};
