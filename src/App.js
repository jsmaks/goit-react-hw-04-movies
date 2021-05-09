import { Route, Switch } from 'react-router';
import { Suspense, lazy } from 'react';
import routes from './routes/routes';
import SearchBar from './component/SearchBar/SearchBar';

const Home = lazy(() =>
  import('./pages/HomeView/Home' /* webpackChunkName: "home" */),
);
const Movies = lazy(() =>
  import('./pages/MoviesView/Movies' /* webpackChunkName: "movies" */),
);
const MovieDetails = lazy(() =>
  import(
    './pages/MovieDetailsView/MovieDetails' /* webpackChunkName: "movieDetails" */
  ),
);
const NotFoundView = lazy(() =>
  import('./component/NotFound/NotFound' /* webpackChunkName: "notFound" */),
);

function App() {
  return (
    <div className="container">
      <SearchBar />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.movies} component={Movies} />
          <Route path={routes.movieDetails} component={MovieDetails} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
