export const Request = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Bir hata oluştu");
  }
  const data = await response.json();
  return data;
}

export const RequestById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error("Bir hata oluştu");
  }
  const data = await response.json();
  return data;
}

