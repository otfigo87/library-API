import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 4em;
  background: #b3d0c7;
`;
const Title = styled.h1`
  margin: 1rem 0.5rem;
  font-family: monospace;
  text-align: center;
`;
const Form = styled.form`
  text-align: center;
`;
const Input = styled.input`
  height: 2.5em;
  width: 350px;
  padding: 0.3em;
  margin: 10px 0 50px 0;
  border-radius: 10px;
  border: none;
`;
const Search = () => {

    const [books, setBooks] = useState([]);
    const [subject, setSubject] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();
        setSubject(e.target.value);
    };

    useEffect(() => {
         axios
           .get(
             `http://openlibrary.org/subjects/${ subject ? subject : "love" }.json`
           )
           .then((response) => {
             setBooks(response.data.works);
           })
           .catch((error) => console.log(error));
    },[subject])

  return (
    <Wrapper>
      <Title>Search by Subject</Title>
      <Form>
        <Input
          type="text"
          placeholder="Search Subjects"
          onChange={(e) => handleOnChange(e)}
        />
      </Form>
      <div className="book-list">
        {books.map((book) => (
          <Book book={book} key={book.key} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Search