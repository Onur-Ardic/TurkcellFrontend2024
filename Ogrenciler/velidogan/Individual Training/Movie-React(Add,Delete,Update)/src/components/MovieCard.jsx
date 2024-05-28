import React from 'react'
import "../css/MovieCard.css"
function MovieCard({movie,deleteMovie,setMovie,setEditStatus}) {
    const {id,name,author,category,date,imgUrl} = movie;
    return (
        <>
            <div id={id} className="col my-2">
                <div className="card">
                    <div className="text-center">
                        <img src={imgUrl}/>
                        <div className="position-absolute bottom-0 end-0">
                            <button className="btn btn-warning me-1" onClick={(e)=>{setMovie(movie);setEditStatus(true)}}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button className="btn btn-danger" onClick={(e)=>{deleteMovie(e,movie.id)}}>
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="text-truncate">Book Name: {name}</h5>
                        <p className="text-truncate mb-0">Author: {author}</p>
                        <p className="text-truncate mb-0">Category: {category}</p>
                        <p className="text-truncate mb-0">Date: {date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard