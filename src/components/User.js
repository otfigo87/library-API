import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d0dede;
  border-radius: 10px;
  padding: 10px;
  margin: 1em;
`;

const Line = styled.h3`
margin: 10px;
`;

const User = ({ user }) => {

  const dateString = user.seed_count;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() ; // add 1 because getMonth() returns zero-based month
  const day = date.getDate();
  return (
    <Wrapper>
      <Line>Organization: {user.name}</Line>
      <Line>Members: {user.seed_count}</Line>
      <Line>Since: {`${year}-${month}-${day}`}</Line>
      <Line>
        URL: <a href={user.full_url}>{user.full_url}</a>
      </Line>
     <h5>Details...</h5>
    </Wrapper>
  );
}

export default User