export async function getUser(username) {
    const response = await fetch(
        `https://api.github.com/users/${username}`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        }
    );
    const data = await response.json();
    return data;
}