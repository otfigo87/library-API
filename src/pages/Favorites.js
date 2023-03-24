import React from "react";
import { useAppContext } from "../AppContext";
import Book from "../components/Book";
import styled from "styled-components";

const Title = styled.h1`
  margin: 5rem 0.5rem;
  font-family: monospace;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8em 3em;
`;

const Favorites = () => {
  const { favorites } = useAppContext();

  return (
    <Div>
      {favorites.length ? (
        favorites.map((book) => <Book book={book} />)
      ) : (
        <Title>No Downoalds!</Title>
      )}
    </Div>
  );
};

export default Favorites;
