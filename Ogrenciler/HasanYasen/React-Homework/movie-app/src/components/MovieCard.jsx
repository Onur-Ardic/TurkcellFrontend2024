import { putMovie, deleteMovie } from "../../request/request"

const url = "http://localhost:3000/movies"

function MovieCard({ movies }) {
    return (
        <div className="container">
            <div className="row">
                {movies.map((movie, index) => {
                    return (
                        <div key={index} className="card col-3">
                            <div className="card-header">
                                <div>{movie.title}</div>
                            </div>
                            <div>{movie.director}</div>
                            <div>{movie.category}</div>
                            <div>{movie.year}</div>
                            <img src={movie.imgUrl}></img>
                            <div className="card-footer d-flex justify-content-center gap-3">
                                <button onClick={() => putMovie()} className="btn btn-info">Update</button>
                                <button onClick={() => deleteMovie(`${url}/${movie.title}`)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieCard