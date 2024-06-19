import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

const BookList = () => {
  const { books, searchQuery, filterCategory, sortOption } = useSelector((state) => state.books);

  let filteredBooks = books.filter((book) => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterCategory ? book.category === filterCategory : true)
  );

  if (sortOption === 'date') {
    filteredBooks = filteredBooks.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOption === 'a-z') {
    filteredBooks = filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div>
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
