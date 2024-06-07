const url = "https://newsapi.org/v2/everything?";
export const readData = async () => {
    const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'apikey 5c66f497a1074197b3d427400e130535'
        }
    });
    if (!response.ok) {
      throw new Error("Network reponse was not ok");
    }
    const result = await response.json();
    return result;
  };

