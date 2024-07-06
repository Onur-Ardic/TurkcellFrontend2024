import React from 'react';

const FilterPanel = ({ categories, authors, filters, handleCategoryChange, handleAuthorChange }) => {
  return (
    <div className="filter-panel border border-start-0 border-top-0 border-bottom-0 p-3 ">
      <h3>Kategori</h3>
      {categories.map((category) => (
        <div key={category} className='mb-2'>
          <input
            className='me-2'
            type="checkbox"
            value={category}
            checked={filters.category.includes(category)}
            onChange={handleCategoryChange}
          />
          <label>{category}</label>
        </div>
      ))}

      <h3 className='pt-4'>Yazar</h3>
      {authors.map((author) => (
        <div key={author} className='mb-2'>
          <input
            style={{ width: '15px' }}
            className='me-2'
            type="checkbox"
            value={author}
            checked={filters.author.includes(author)}
            onChange={handleAuthorChange}
          />
          <label>{author}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterPanel;
