export async function Request ()  {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Sunucu Hatası");
  }
  const data = await response.json();
  return data;
}

export async function RequestById (id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error("Sunucu Hatası");
  }
  const data = await response.json();
  return data;
}

