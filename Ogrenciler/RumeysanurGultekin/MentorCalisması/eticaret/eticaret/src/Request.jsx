
const url= "https://fakestoreapi.com/products"
export const readData = async (user) => {
    const response = await fetch(`${url}/${user}`, {
      method: "GET",
      headers: {
        Authorization: `token`,
      },
    });
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Sayfa Bulunamadı");
      }
      throw new Error("Network Hatası");
    }
    const result = await response.json();
    return result;
  };
  