const baseUrl = "http://localhost:3000/movies";

export const getMoviesFromDb = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const addMovieToDb = async (movie) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteMovieFromDb = async (movieId) => {
  const newUrl = `${baseUrl}/${movieId}`;
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

export const updateMovieFromDb = async (movieId, updatedMovie) => {
  const newUrl = `${baseUrl}/${movieId}`;
  try {
    const response = await fetch(newUrl, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
