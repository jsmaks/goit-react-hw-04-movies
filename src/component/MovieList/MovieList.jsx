import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
const MovieList = props => {
  const { movies, match, location } = props;
 

  return (
    <ul>
       {movies && movies.length > 0 &&
        movies.map(({ id, title, original_name }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: `${match.path}${location.search}` },
                }}
              >
                {title || original_name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default withRouter(MovieList);
