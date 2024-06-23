import React, { useState } from 'react';
import { Middle, SearchBox, StyledInput, MaterialIcons, SearchButton } from './Styled';
import { Label } from '../atoms/Label';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isIconVisible, setIsIconVisible] = useState(false);

  const handleFocus = () => {
    setIsIconVisible(true);
  };

  const handleBlur = () => {
    setIsIconVisible(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <Middle>
      <SearchBox>
        {isIconVisible && (
          <MaterialIcons id='displayIcon' className="material-symbols-outlined">
            search
          </MaterialIcons>
        )}
        <Label htmlFor="searchInput">Ara</Label>
        <StyledInput 
          id="searchInput"
          value={inputValue}
          onChange={handleChange} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
        />
      </SearchBox>
      <SearchButton>
        <MaterialIcons className="material-symbols-outlined">
          search
        </MaterialIcons>
      </SearchButton>
      <MaterialIcons className="material-symbols-outlined">
        mic
      </MaterialIcons>
    </Middle>
  );
};

export default SearchBar;
