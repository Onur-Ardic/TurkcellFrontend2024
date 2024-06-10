export async function getNewsCategory(category) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=us`,
      {
        method: "GET",
        headers: {
          authorization: "dec386ad82704cfaa96b45b79b30ba4f",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error User: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export async function getNewsData() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us`,
      {
        method: "GET",
        headers: {
          authorization: "dec386ad82704cfaa96b45b79b30ba4f",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error User: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
