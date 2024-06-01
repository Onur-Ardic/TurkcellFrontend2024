import React, { useState } from 'react';
import Requests from "../Requests.js";  // Dosya adı "Request.js" yerine "Requests.js" olarak güncellendi
import BookModal from './BookModal.jsx';

function MovieCard() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSave = async (book) =>{
        try {
            const newBook = await Requests.post("http://localhost:3000/books", book);
            setBooks([...books, newBook]);
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBooks = async () => {
        try {
            const data = await Requests.get("http://localhost:3000/books");
            setBooks(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteBook = async (id) => {
        try {
            await Requests.delete(`http://localhost:3000/books/${id}`);
            setBooks(books.filter(book => book.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const updateBook = async (id, updatedData) => {
        try {
            const updatedBook = await Requests.put(`http://localhost:3000/books/${id}`, updatedData);
            setBooks(books.map(book => (book.id === id ? updatedBook : book)));
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <h2>Books</h2>
            <button className='btn btn-primary' id="getbooks" onClick={fetchBooks}>Get Books</button>
            <button className='btn btn-success' onClick={() => setShowModal(true)}>Add Book</button>
            {
                books.map((book) => (
                    <div className='card' key={book.id}>
                        <img src={book.url} alt={book.name} />
                        <div className='card-body'>
                            <div className='card-title'>{book.name}</div>
                            <div className='card-text'>{book.author}</div>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-danger' onClick={() => deleteBook(book.id)}>Delete</button>
                            <button className='btn btn-warning' onClick={() => updateBook(book.id, { ...book, name: "Updated Name" })}>Update</button>
                        </div>
                    </div>
                ))
            }
            <BookModal show={showModal} handleClose={() => setShowModal(false)} handleSave={handleSave}/>
        </>
    );
}

export default MovieCard;
