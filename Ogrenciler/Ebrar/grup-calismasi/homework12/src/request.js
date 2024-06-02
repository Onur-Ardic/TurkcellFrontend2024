export async function getUser(user) {
  const response = await fetch(`https://api.github.com/users/${user}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("User not found");
  }

  const data = await response.json();
  return data;
}
