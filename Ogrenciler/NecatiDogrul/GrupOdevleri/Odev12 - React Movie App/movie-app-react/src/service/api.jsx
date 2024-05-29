const api = 'http://localhost:3000/movies';

export const fetchMovies = async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error('Error fetch');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const addMovie = async (movie) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    if (!response.ok) {
      throw new Error('Error addmovie');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding movie:', error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error deletemovie');
    }
  } catch (error) {
    console.error('Error deleting movie:', error);
    throw error;
  }
};

export const updateMovie = async (id, updatedMovie) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    });
    if (!response.ok) {
      throw new Error('Error update movie');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};
