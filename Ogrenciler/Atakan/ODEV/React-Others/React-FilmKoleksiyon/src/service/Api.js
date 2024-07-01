import axios from "axios";

const url = "http://localhost:3000/movies"

export const getAllMovies = async() => {
    return await axios.get(url)
}

export const addMovie = async(movie) => {
    return await axios.post(url, movie)
}

export const deleteMovie = async (id) => {
    return await axios.delete(`${url}/${id}`)
}

export const updateMovie = async(id, movie) => {
    return await axios.put(`${url}/${id}`, movie)
}