const url = "https://newsapi.org/v2/top-headlines?country=us&";
export const readData = async (cata) => {
  const response = await fetch(`${url}category=${cata}&apiKey=5c66f497a1074197b3d427400e130535`, {
    method: "GET",
    headers: {
      // Authorization: "apikey 5c66f497a1074197b3d427400e130535",
    },
  });
  if (!response.ok) {
    throw new Error("Network reponse was not ok");
  }
  const result = await response.json();
  return result;
};
