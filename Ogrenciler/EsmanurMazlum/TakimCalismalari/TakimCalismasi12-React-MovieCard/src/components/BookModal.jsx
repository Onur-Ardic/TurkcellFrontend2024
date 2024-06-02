import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react'

function BookModal({show, handleClose, handleSave}) {
    const [book, setBook] = useState({
        title: '',
        author: '',
        category: '',
        releaseDate: '',
        url: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBook({...book, [name]: value});
    };

    const handleSubmit = () =>{
        handleSave(book);
        setBook({title: '', author: '', category:'', releaseDate:'', url: ''});
    }


  return (
    <Modal show= {show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Kitap Bilgilerini Girin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBookTitle">
                    <Form.Label>Kitap Adı</Form.Label>
                    <Form.Control type="text" name="title" value={book.title} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBookAuthor">
                    <Form.Label>Yazar</Form.Label>
                    <Form.Control type="text" name="author" value={book.author} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBookCategory">
                    <Form.Label>Kategori</Form.Label>
                    <Form.Control type="text" name="category" value={book.category} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBookDate">
                    <Form.Label>Yayınlanma Tarihi</Form.Label>
                    <Form.Control type="text" name="releaseDate" value={book.releaseDate} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBookUrl">
                    <Form.Label>Url</Form.Label>
                    <Form.Control type="url" name="url" value={book.url} onChange={handleChange}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>Kapat</Button>
            <Button variant="success" onClick={handleSubmit}>Kaydet</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default BookModal