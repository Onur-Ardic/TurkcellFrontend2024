import { useState } from "react";
import Search from "./Search";
import SortPanel from "./SortPanel";

const Header = ({ addBookUI, handleSearch, handleSort }) => {

  const defaultImage = "https://www.cihatayaz.com/wp-content/uploads/2016/06/hevesli-kitap-okumak.jpg";

  const [book, setBook] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookYear: "",
    bookCategory: "",
    bookImg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.bookTitle || !book.bookAuthor || !book.bookYear || !book.bookCategory)
      return alert("Kitap bilgilerini eksiksiz doldurunuz");
    if (!book.bookImg) {
      book.bookImg = defaultImage;
    }
    addBookUI(book);
    setBook({
      bookTitle: "",
      bookAuthor: "",
      bookYear: "",
      bookCategory: "",
      bookImg: "",
    });
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="row w-100 align-items-center">
            <div className="col-5">
              <a className="navbar-brand" href="#">
                Kütüphanem
              </a>
            </div>
            <div className="col-7 d-flex justify-content-end">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Search handleSearch={handleSearch} />
                <SortPanel handleSort={handleSort} />
                <button
                  type="button"
                  className="btn btn-primary ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#addBookModal">
                  Kitap Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="addBookModal" tabIndex="-1" aria-labelledby="addBookModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addBookModalLabel">
                Kitap Ekle
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="bookTitle" className="form-label">
                    Kitap Adı
                  </label>
                  <input
                    onChange={handleChange}
                    value={book.bookTitle}
                    type="text"
                    name="bookTitle"
                    className="form-control"
                    id="bookTitle" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bookAuthor" className="form-label">
                    Yazar
                  </label>
                  <input
                    onChange={handleChange}
                    value={book.bookAuthor}
                    type="text"
                    name="bookAuthor"
                    className="form-control"
                    id="bookAuthor" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bookYear" className="form-label">
                    Basım Yılı
                  </label>
                  <input
                    onChange={handleChange}
                    value={book.bookYear}
                    type="text"
                    name="bookYear"
                    className="form-control"
                    id="bookYear" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bookCategory" className="form-label">
                    Kategori
                  </label>
                  <select
                    onChange={handleChange}
                    value={book.bookCategory}
                    className="form-control"
                    name="bookCategory"
                    id="bookCategory">
                    <option>Seçiniz</option>
                    <option>Bilim-Kurgu</option>
                    <option>Edebiyat</option>
                    <option>Polisiye</option>
                    <option>Macera</option>
                    <option>Aşk</option>
                    <option>Tarihi</option>
                    <option>Çocuk</option>
                    <option>Felsefe</option>
                    <option>Biyografi</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="bookImg" className="form-label">
                    Kapak Afiş URL'i
                  </label>
                  <input
                    onChange={handleChange}
                    value={book.bookImg}
                    type="text"
                    name="bookImg"
                    className="form-control"
                    id="bookImg" />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal">
                    Ekle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Header;
