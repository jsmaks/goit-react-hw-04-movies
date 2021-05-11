import Home from '../pages/HomeView/Home';
import Movie from '../pages/MoviesView/Movies';
import MovieDetails from '../pages/MovieDetailsView/MovieDetails';
import { Route, Switch, Redirect } from 'react-router';

export const paths = {
  home: '/',
  movies: '/movies',
  movieDetails: '/movies/:movieId',
};

const routes = [
  {
    path: paths.home,
    component: Home,
    exact: true,
  },
  {
    path: paths.movies,
    component: Movie,
    exact: true,
  },
  {
    path: paths.movieDetails,
    component: MovieDetails,
  },
];

const Router = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to="/error" />
    </Switch>
  );
};
export default Router;
