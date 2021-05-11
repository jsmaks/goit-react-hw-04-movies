import { NavLink } from 'react-router-dom';
import { paths } from '../../../routes/Router';

const navList = [
  {
    to: paths.home,
    text: 'Home',
    state: '',
  },
  {
    to: paths.movie,
    text: 'Movies',
    state: '',
  },
];

const Navigation = () => {
  return (
    <nav>
      <ul className="header__nav">
        <li>
          <NavLink
            exact
            className="NavLink"
            activeClassName="NavLink--active"
            to={paths.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to={paths.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
