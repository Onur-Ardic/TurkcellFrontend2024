import React from 'react';
import styles from "./Cards.module.scss";
import { Link } from 'react-router-dom';

const Cards = ({ results , page }) => {
    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            return (
                <Link 
                style={{ textDecoration: "none" }} to={`${page}${id}`} key={id} className="col-4 col-lg-4 col-md-6 col-12 position-relative text-dark">
                    <div className={`${styles.cards} d-flex justify-content-center flex-column  `}>
                        <img src={image} alt={name} className={`${styles.img} img-fluid`} />
                        <div className="content" style={{ padding: '10px' }}>
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className=''>
                                <div className='fs-6'>Last Location</div>
                                <div className='fs-5'>{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {status === "Dead" && (
                        <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                    )}
                    {status === "Alive" && (
                        <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                    )}
                    {status !== "Dead" && status !== "Alive" && (
                        <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                    )}
                </Link>
            );
        });
    } else {
        display = <p>No Characters Found :/</p>;
    }

    return (
        <div className="row">
            {display}
        </div>
    );
};

export default Cards;
