import React from 'react'

const Card = ({ day }) => {
    return (
        <>
            <div className="weather-card card col-2 rounded-5 text-center bg-body-tertiary border border-0 shadow">
                <img src={day.icon} className="card-img-top p-3" alt="..." />
                <div className="card-body d-flex flex-column gap-2">
                    <div className='rounded-pill purple-bg px-3 py-2 text-white'><h5 className="card-title m-0 fs-4">{day.day}</h5></div>
                    <div>
                        <span className="card-text purple fs-1 fw-bold me-2">{day.degree.split(".")[0]}°</span>
                        <span className="card-text purple fs-3 fw-bold opacity-75">{day.night.split(".")[0]}°</span>
                    </div>
                    <p className='fs-3 text-body-secondary'><i className="purple fa-solid fa-droplet me-2"></i>{day.humidity}%</p>
                    <p className='fs-5 text-body-secondary'>{day.description.charAt(0).toUpperCase() + day.description.slice(1)}</p>
                </div>
            </div>
        </>
    )
}

export default Card
