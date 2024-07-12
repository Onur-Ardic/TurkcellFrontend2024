// components/Search.js

import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-top: 20px;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // Arama fonksiyonu burada yapılabilir
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default Search;
