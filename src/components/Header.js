import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components';

const List = styled.li`
  color: #625454;
  text-align: center;
  /* text-decoration: none; */
  margin: 0.5rem 2rem;
  padding: 0.2rem;
  /* border-left: 4px solid #625454; */
  /* border-bottom: 4px solid #625454; */
  @media (max-width: 655px){
    margin:0;

  }
`;
const Nav = styled.nav``;

const Header = () => {

  return (
    <Nav>
      <ul>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <List>Home</List>
        </NavLink>
        <NavLink
          to="/about"
          style={{ textDecoration: "none" }}
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <List>About</List>
        </NavLink>
        <NavLink
          to="/users"
          style={{ textDecoration: "none" }}
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <List>Archive</List>
        </NavLink>
        <NavLink
          to="/search"
          style={{ textDecoration: "none" }}
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <List>Search</List>
        </NavLink>
        <NavLink
          to="/favorites"
          style={{ textDecoration: "none" }}
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <List>Downoalds</List>
        </NavLink>
      </ul>
    </Nav>
  );
  }

export default Header  
