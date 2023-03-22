import { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";
import styled from 'styled-components';

const Title = styled.h1`
  margin: 5rem ;
  font-family: monospace;
`;
const Wrapper = styled.div`
  padding: 2em;
  background: #b3d0c7;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://openlibrary.org/people/george08/lists.json`)
      .then((res) => {  
       setUsers(res.data.entries);
       setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const loading = () => (
    <Title>Users List Data is Loading...</Title>
  )
  const loaded = () => {
    return users.map((user, index) => <User user={user} key={index} />);
  };
  return (
      <Wrapper>{isLoading ? loading() : loaded()}</Wrapper>
  );
};

export default Users;
