const url = "https://api.github.com/users";
const token = import.meta.env.VITE_GITHUB_TOKEN;

export const readData = async (user) => {
  const response = await fetch(`${url}/${user}`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Kullanıcı Bulunamadı");
    }
    throw new Error("Network Hatası");
  }
  const result = await response.json();
  return result;
};

export const readRepo = async (user) => {
  const response = await fetch(`${url}/${user}/repos`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Kullanıcı Bulunamadı");
    }
    throw new Error("Network Hatası");
  }
  const result = await response.json();
  return result;
};
