import React from 'react';
import { Middle, LabelInput, SearchBox, StyledInput, SearchButton, MaterialIcons } from './Styled';
import Labels from '../atoms/Label';

const SearchBar = () => {
  return (
    <Middle>
      <SearchBox>
        <StyledInput
        />
        <Labels as={LabelInput} text="Ara"/>
      </SearchBox>
        <SearchButton aria-label='Ara'><MaterialIcons className="material-symbols-outlined">
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
