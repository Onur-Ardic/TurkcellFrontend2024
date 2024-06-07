
export async function getNews() {
    const apikey = "45c49dc2a7d4488b8e1f83d87d6bcf6a";
    const response = await fetch(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apikey}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `apikey ${apikey}`,
        },
      }
    );
    const data = await response.json();
  
    return data;
  }

  export async function getNews2() {
    const apikey = "45c49dc2a7d4488b8e1f83d87d6bcf6a";
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `apikey ${apikey}`,
        },
      }
    );
    const data = await response.json();
  
    return data;
  }
