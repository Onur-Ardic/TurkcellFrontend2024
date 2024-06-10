const API_KEY = "e02970d7b88446388f8167f77881baa4";
//const API_KEY = "c9b36bcfbd634ed3bb26a4117b982bd6";

export const getData = async (category) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&country=us`,
    {
      headers: {
        authorization: API_KEY,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};

export const searchNews = async (q) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${q}`, {
    headers: {
      authorization: API_KEY,
    },
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};

export const getNews = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us`,
    {
      headers: {
        authorization: API_KEY,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};
