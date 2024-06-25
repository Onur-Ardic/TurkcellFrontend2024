export default Request = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Bir hata oluştu");
  }
  const data = await response.json();
  return data;
};
