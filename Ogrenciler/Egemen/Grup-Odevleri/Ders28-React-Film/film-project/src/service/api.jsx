
import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const addMovie = async (movie) => {
  try {
    const response = await axios.post(API_URL, movie);
    return response.data;
  } catch (error) {
    console.error('Error adding movie:', error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting movie:', error);
    throw error;
  }
};

export const updateMovie = async (id, updatedMovie) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedMovie);
    return response.data;
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};
