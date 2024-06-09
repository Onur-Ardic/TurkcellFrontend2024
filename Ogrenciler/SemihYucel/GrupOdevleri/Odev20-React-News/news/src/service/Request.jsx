export const getData = async (category) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&country=us`,
    {
      headers: {
        authorization: "e02970d7b88446388f8167f77881baa4",
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
      authorization: "e02970d7b88446388f8167f77881baa4",
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
        authorization: "e02970d7b88446388f8167f77881baa4",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};
