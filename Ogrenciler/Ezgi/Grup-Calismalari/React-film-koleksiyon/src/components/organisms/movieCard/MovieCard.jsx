import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from '../../atoms/button/Button';
import { deleteMovie } from '../../../service/Api';

const MovieCard = ({ movie, onDelete }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.director}</Card.Text>
                    <Card.Text>{movie.category}</Card.Text>
                    <Card.Text>{movie.year}</Card.Text> 
                </Card.Body>
                <Card.Footer>
                    <Button text = "Sil" onClick={onDelete}/> 
                    {/* <Button text = "Güncelle" onClick={}/>  */}

                </Card.Footer>
            </Card>
        </>
    )
}

export default MovieCard
