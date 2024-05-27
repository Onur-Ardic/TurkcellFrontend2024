let data;
const url = "http://localhost:3000/movies";
export async function getMovies(url) {
  const response = await fetch(url);
  data = await response.json();
  return data;
}

export async function postMovie(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  data = await response.json();
  return data;
}

export async function putMovie(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  data = await response.json();
  return data;
}

export const deleteMovie = async (id) => {
  const newUrl = `${url}/${id}`;
  try {
    const response = await fetch(newUrl, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
