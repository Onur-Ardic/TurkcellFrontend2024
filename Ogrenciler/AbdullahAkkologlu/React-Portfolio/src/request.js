const endpoint =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akkologlu";
export const readArticles = async () => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Error");
  }
  const result = await response.json();
  return result;
};
