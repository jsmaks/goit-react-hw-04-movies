import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes'
const Navigation = () => {
  return (
    <nav>
      <ul className="header__nav">
        <li>
          <NavLink
            exact
            className="NavLink"
            activeClassName="NavLink--active"
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
