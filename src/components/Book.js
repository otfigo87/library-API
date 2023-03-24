import React from "react";
import styled from "styled-components";
import { useAppContext } from "../AppContext";

const Edition = styled.h4`
  color: #322e2e;
`;
const Btn = styled.button`
  padding: 2px;
  border-radius: 5px;
  border: none;
  color: #966b1a;
  font-style: italic;
  cursor: pointer;
`;

const Book = ({ book }) => {
  const { favorites, addToFavorites, removeFavorites } = useAppContext();

  const favoritesChecker = (ia) => {
    const boolean = favorites.some((book) => book.ia === ia);
    return boolean;
  };

  console.log(book);
  return (
    <div className="card">
      <h2>{book.title}</h2>
      <Edition>Edition: {book.edition_count}</Edition>
      <Edition>Published: {book.first_publish_year}</Edition>
      {favoritesChecker(book.ia) ? (
        <Btn onClick={() => removeFavorites(book.ia)}>Undownoald</Btn>
      ) : (
        <Btn onClick={() => addToFavorites(book)}>Downoald</Btn>
      )}
    </div>
  );
};

export default Book;
