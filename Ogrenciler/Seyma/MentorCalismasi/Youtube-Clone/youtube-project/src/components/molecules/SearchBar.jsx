import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Middle, SpeakOut, StyledButton, SearchBox, ButtonDiv } from './Styled';

const SearchBar = ({ id, type, onChange, value, onClick }) => {
  return (
    <Middle>
      <SearchBox>
        <Input 
          id={id}
          type={type}
          onChange={onChange}
          value={value}
        />
      </SearchBox>
      <ButtonDiv>
      <Button as={StyledButton} onClick={onClick} type={type} aria-label='Ara' text={<img 
            src="https://img.icons8.com/ios-glyphs/30/search--v1.png" 
            alt="search--v1"
          />}>
          
        </Button>
      </ButtonDiv>
     
      <SpeakOut>
        <img 
          width="24" 
          height="24" 
          src="https://img.icons8.com/material-rounded/24/microphone.png" 
          alt="microphone"
        />
      </SpeakOut>
    </Middle>
  );
};

export default SearchBar;
