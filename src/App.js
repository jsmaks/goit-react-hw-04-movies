import { Route, Switch } from 'react-router';
import routes from './routes/routes';
import Home from './pages/HomeView/Home';
import Movies from './pages/MoviesView/Movies';
import MovieDetails from './pages/MovieDetailsView/MovieDetails';
import SearchBar from './component/SearchBar/SearchBar';
import NotFoundView from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <SearchBar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.movieDetails} component={MovieDetails} />
        <Route exact path={routes.movies} component={Movies} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
