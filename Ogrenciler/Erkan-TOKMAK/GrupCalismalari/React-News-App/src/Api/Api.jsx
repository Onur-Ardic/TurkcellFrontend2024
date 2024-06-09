export const getNewsByCategory = async (category) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=e68382dd1f4749daa9a5bc7e788aa4b4`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
export const getAllNews = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=e68382dd1f4749daa9a5bc7e788aa4b4`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
export const getBySearch = async (search) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=e68382dd1f4749daa9a5bc7e788aa4b4`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
export const getCurrencyApi = async () => {
  const response = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_OYhLxeiLlpiGjSb9HL39w55Zu81qMg1uMaHwkpNR`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
