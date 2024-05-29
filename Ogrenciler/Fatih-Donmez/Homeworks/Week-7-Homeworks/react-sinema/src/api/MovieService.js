import axios from "axios";

export async function addFilmToDb(film) {
  try {
    const response = await axios.post("http://localhost:3000/movies", film);
    return response.data;
  } catch (error) {
    console.error("Error adding film to the database:", error);
    throw error;
  }
}

export async function getFilmsFromDb() {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    return response.data;
  } catch (error) {
    console.error("Error retrieving films from the database:", error);
    throw error;
  }
}
export async function deleteFromDb(id) {
  try {
    const response = await axios.delete(`http://localhost:3000/movies/${id}`);
  } catch (error) {
    console.error("Error deleting film from the database:", error);
  }
}
export async function updateFilmInDb(film) {
  try {
    const response = await axios.put(
      `http://localhost:3000/movies/${film.id}`,
      film
    );
    return response.data;
  } catch (error) {
    console.error("Error updating film in the database:", error);
    throw error;
  }
}
