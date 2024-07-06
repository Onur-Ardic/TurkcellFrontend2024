import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Request from "./service/API";
import BookCard from './components/BookCard';
import FilterPanel from './components/FilterPanel';

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    author: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortQuery, setSortQuery] = useState('');

  const categories = Array.from(new Set(books.map((book) => book.bookCategory)));
  const authors = Array.from(new Set(books.map((book) => book.bookAuthor)));

  const fetchBooks = async () => {
    try {
      const allBooks = await Request.get('http://localhost:3000/books');
      setBooks(allBooks || []);
      setFilteredBooks(allBooks || []);
      console.log(allBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const addBookUI = async (book) => {
    try {
      const newBook = await Request.post('http://localhost:3000/books', book);
      setBooks([...books, newBook]);
      setFilteredBooks([...books, newBook]);
    } catch (error) {
      console.log(error);
    }

  };

  const deleteBookUI = async (id) => {
    try {
      await Request.remove(`http://localhost:3000/books/${id}`); // Backticks kullanılmalı
      const remainingBooks = books.filter((book) => book.id !== id);
      setBooks(remainingBooks);
      setFilteredBooks(remainingBooks);
    } catch (error) {
      console.log(error);
    }
  };


  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: checked
        ? [...prevFilters.category, value]
        : prevFilters.category.filter((category) => category !== value)
    }));
  };

  const handleAuthorChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      author: checked
        ? [...prevFilters.author, value]
        : prevFilters.author.filter((author) => author !== value)
    }));
  };

  const applyFilters = () => {
    let filtered = [...books];

    if (filters.category.length > 0) {
      filtered = filtered.filter((book) => filters.category.includes(book.bookCategory));
    }

    if (filters.author.length > 0) {
      filtered = filtered.filter((book) => filters.author.includes(book.bookAuthor));
    }

    if (searchQuery.length > 0) {
      filtered = filtered.filter((book) => 
        book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
        book.bookAuthor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    switch(sortQuery) {
      case 'A-Z':
        filtered.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        break;
      case 'Z-A':
        filtered.sort((a, b) => b.bookTitle.localeCompare(a.bookTitle));
        break;
      case 'desc':
        filtered.sort((a, b) => new Date(b.bookYear) - new Date(a.bookYear));
        break;
      case 'asc':
        filtered.sort((a, b) => new Date(a.bookYear) - new Date(b.bookYear));
        break;
      default:
        break;
    }
    setFilteredBooks(filtered);
  };


  const handleSearch = (query) => { 
    setSearchQuery(query);
  };

  const handleSort = (sortQuery) => {
    setSortQuery(sortQuery);
  };


  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, searchQuery, sortQuery, books]);

  return (
    <>
      <Header addBookUI={addBookUI} handleSearch={handleSearch} handleSort={handleSort} />
      <div className="container mt-5 py-3">
        <div className="row">
          <div className="col-md-2">
            <FilterPanel
              categories={categories} 
              authors={authors}
              filters={filters}
              handleCategoryChange={handleCategoryChange}
              handleAuthorChange={handleAuthorChange}
            />
          </div>
          <div className="col-md-10">
            <div className="row row-cols-4 g-4">
              {filteredBooks.map((book) => (
                <div key={book.id} className="col mb-4 book-card">
                  <BookCard book={book} deleteBookUI={deleteBookUI} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
