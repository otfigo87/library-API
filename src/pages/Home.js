import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 4em;
background: #b3d0c7;
`;
const Title = styled.h1`
margin: 1rem 0.5rem;
font-family: monospace;
`;
const Tax = styled.h5`
color: #ea4646;
margin-top: 3px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Home Page</Title>
      <p>
        Dear Open Library Patron, As a project of the Internet Archive—a
        nonprofit internet library dedicated to promoting Universal Access to
        All Knowledge—Open Library is working to make digital books available to
        everyone, everywhere. And we’re growing faster than ever before. Since
        we first launched, we have digitized more than 4.6 million books, and
        are adding another 3,500 every single day. Our ultimate goal for Open
        Library is to make all the published works of humankind available to
        everyone in the world. While large in scope and ambition, this goal is
        within our grasp. Achieving it will require the participation of
        librarians, authors, technologists, policy makers,
        and—importantly—supporters like you. Because we firmly believe that
        libraries should be free, we will never run ads, sell user data, or
        charge for access to our collection. Instead, we rely on the generosity
        of individuals like you to pay for servers, staff, and digitization
        costs. If you enjoy wandering our virtual stacks, please consider
        supporting our work. A little goes a long way, but fewer than 1 in 1,000
        of our patrons donate. If you can afford to help, your support will help
        us build the library we deserve. Thank you for joining me. Brewster
        Kahle Founder & Digital Librarian Please make a tax-deductible donation
        now. You will receive an email confirmation that can be used for your
        tax records. The Internet Archive is a California non-profit charity
        that is tax-exempt under section 501c3 of the Internal Revenue Code.
      </p>
      <Tax>Federal Tax ID Number 94-3242767.</Tax>
    </Wrapper>
  );

  
}

export default Home