import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
`;

const BookCard = ({ book }) => {
  return (
    <Card>
      <h2>{book.title}</h2>
      <p>{book.category}</p>
      <p>{book.date}</p>
    </Card>
  );
};

export default BookCard;
