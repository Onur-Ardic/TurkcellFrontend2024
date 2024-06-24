const API_URL = "https://jsonplaceholder.typicode.com";
const PHOTOS_API_URL = "https://picsum.photos/v2/list?page=1&limit=10";

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const data = await response.json();
  return data;
};

export const fetchPhotos = async () => {
  const response = await fetch(PHOTOS_API_URL);
  const data = await response.json();
  return data;
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  const data = await response.json();
  return data;
};
