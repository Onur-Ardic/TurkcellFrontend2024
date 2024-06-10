const categoryUrl = "https://newsapi.org/v2/top-headlines?country=us&";
export const getCategory = async (category) => {
  const response = await fetch(`${categoryUrl}category=${category}`, {
    method: "GET",
    headers: {
      Authorization: "apikey fb44ce1bd88740d4990d843834598291",
    },
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};

const searchUrl = "https://newsapi.org/v2/everything?";
export const getSearch = async (search) => {
  const response = await fetch(`${searchUrl}q=${search}`, {
    method: "GET",
    headers: {
      Authorization: "apikey fb44ce1bd88740d4990d843834598291",
    },
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};
