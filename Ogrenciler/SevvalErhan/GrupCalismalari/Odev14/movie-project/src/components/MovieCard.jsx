import React, { useState } from 'react';
import Requests from "../Requests.js";
import MovieModal from './MovieModal.jsx';
import { useEffect } from 'react';

function MovieCard() {
    const [movies, setMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleSave = async (movie) => {
        try {
            if (selectedMovie) {
                const updatedMovie = await Requests.put(`http://localhost:3000/movies/${selectedMovie.id}`, movie);
                setMovies(movies.map(m => (m.id === selectedMovie.id ? updatedMovie : m)));
                setSelectedMovie(null);
            } else {
                const newMovie = await Requests.post("http://localhost:3000/movies", movie);
                setMovies([...movies, newMovie]);
            }
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchMovies = async () => {
        try {
            const data = await Requests.get("http://localhost:3000/movies");
            setMovies(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteMovie = async (id) => {
        try {
            await Requests.delete(`http://localhost:3000/movies/${id}`);
            setMovies(movies.filter(movie => movie.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleUpdate = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    }

    return (
        <>
            <div className="container">
                <h2>Movies</h2>
                <div className="mb-3">
                  
                    <button className='btn btn-success' onClick={() => setShowModal(true)}>Add Movie</button>
                </div>
                <div className="row">
                    {movies.map((movie) => (
                        <div className='col-md-4 mb-4' key={movie.id}>
                            <div className='card h-100'>
                                <img src={movie.url} className="card-img-top" alt={movie.name} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{movie.name}</h5>
                                    <p className='card-text'>{movie.author}</p>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn button-delete me-2' onClick={() => deleteMovie(movie.id)}>Delete</button>
                                    <button className='btn button-update' onClick={() => handleUpdate(movie)}>Update</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <MovieModal 
                    show={showModal} 
                    handleClose={() => {
                        setShowModal(false);
                        setSelectedMovie(null);
                    }} 
                    handleSave={handleSave} 
                    movie={selectedMovie}
                />
            </div>
        </>
    );
}

export default MovieCard;