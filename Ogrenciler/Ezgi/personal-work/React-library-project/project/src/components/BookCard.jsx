import { MdDelete, MdEdit  } from "react-icons/md";

const BookCard = ({ book, deleteBookUI }) => {


  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <img src={book.bookImg} className="card-img-top img-fluid" alt={book.bookTitle} />
          <div className="card-body">
            <h5 className="card-title">{book.bookTitle}</h5>
            <p className="card-text">{book.bookAuthor}</p>
            <p><i>{book.bookCategory}</i>/<i>{book.bookYear}</i> </p>
          </div>
          <div className="overlay d-flex gap-2">
            <button className="btn btn-danger" onClick={() => deleteBookUI(book.id)}><MdDelete size={20} /></button>
            <button className="btn btn-warning"><MdEdit size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
