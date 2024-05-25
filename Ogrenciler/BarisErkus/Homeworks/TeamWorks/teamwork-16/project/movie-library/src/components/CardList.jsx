import Card from "./Card"
import PropTypes from 'prop-types'

const CardList = ({ movies, updateMovie, deleteMovie }) => {
    return (
        <div className='container'>
            <div className='row'>
                {movies.map((movie) => (
                    <Card
                        id={movie.id}
                        key={movie.id}
                        img={movie.img}
                        name={movie.name}
                        desc={movie.desc}
                        category={movie.category}
                        director={movie.director}
                        year={movie.year}
                        updateMovie={updateMovie}
                        deleteMovie={deleteMovie}
                    />
                ))}
            </div>
        </div>
    )
}

CardList.propTypes = {
    movies: PropTypes.array,
    updateMovie: PropTypes.func,
    deleteMovie: PropTypes.func
}

export default CardList