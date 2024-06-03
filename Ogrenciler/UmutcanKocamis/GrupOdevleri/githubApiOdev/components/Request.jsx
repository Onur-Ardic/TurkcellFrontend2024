export async function getUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
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

export async function getRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error Repos: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
