import React from 'react';
import styled from 'styled-components';

const Edition = styled.h4`
  color: #322e2e;
`

const Book = ({book}) => {
  return (
      <div className="card">
        <h2>{book.title}</h2>
        <Edition>Edition: {book.edition_count}</Edition>
      </div>
  );
}

export default Book