import PropTypes from 'prop-types'

const Card = (
    {
        id,
        img = "https://tepeseo.com/wp-content/uploads/2019/05/404notfound.png",
        name = "Belirtilmedi",
        desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum mauris felis, vitae et.",
        category = "Belirtilmedi",
        director = "Belirtilmedi",
        year = "Belirtilmedi",
        updateMovie,
        deleteMovie
    }) => {

    return (
        <div className="col-4 mb-3">
            <div className="card">
                <img
                    src={img}
                    className="card-img-top"
                    alt="..."
                    style={{ height: '300px' }}
                />
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-2">{name}</h5>
                    <p className="card-text">{desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}</p>
                    <div className='d-flex align-items-center justify-content-center gap-4'>
                        <p>{category}</p>
                        <p className='fw-bold'>{director}</p>
                        <p>{year}</p>
                    </div>
                    <div className="d-flex gap-3 align-items-center justify-content-center">
                        <a href="#" className="btn btn-success" onClick={() => updateMovie(id)}>
                            Güncelle
                        </a>
                        <a href="#" className="btn btn-danger" onClick={() => deleteMovie(id)}>
                            Sil
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    category: PropTypes.string,
    director: PropTypes.string,
    year: PropTypes.string,
    updateMovie: PropTypes.func,
    deleteMovie: PropTypes.func
}

export default Card