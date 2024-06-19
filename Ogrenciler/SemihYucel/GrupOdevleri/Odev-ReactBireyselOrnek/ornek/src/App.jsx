import React from 'react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Sorting from './components/Sorting';
import BookList from './components/BookList';

const App = () => {
  return (
    <div>
      <SearchBar />
      <Filters />
      <Sorting />
      <BookList />
    </div>
  );
};

export default App;
