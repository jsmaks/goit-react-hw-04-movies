import {  NavLink } from 'react-router-dom';
const SearchBar = () => {
  return (
    <nav>
      <ul className="header__nav">
        <li>
          <NavLink
            exact
            className="NavLink"
            activeClassName="NavLink--active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SearchBar;
