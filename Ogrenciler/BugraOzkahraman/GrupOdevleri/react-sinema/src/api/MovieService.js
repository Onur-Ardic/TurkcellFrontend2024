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
