// import { Route, Switch } from 'react-router';
import { Suspense, lazy } from 'react';
// import routes from './routes/Router';
import SearchBar from './component/SearchBar/SearchBar';
import Router from './routes/Router.jsx'

// const Home = lazy(() =>
//   import('./pages/HomeView/Home' /* webpackChunkName: "home" */),
// );
// const Movies = lazy(() =>
//   import('./pages/MoviesView/Movies' /* webpackChunkName: "movies" */),
// );
// const MovieDetails = lazy(() =>
//   import(
//     './pages/MovieDetailsView/MovieDetails' /* webpackChunkName: "movieDetails" */
//   ),
// );
// const NotFoundView = lazy(() =>
//   import('./pages/NotFound/NotFound' /* webpackChunkName: "notFound" */),
// );

function App() {
  return (
    <div className="container">
      <SearchBar />
      {/* <Suspense fallback={<h1>Загружаем...</h1>}> */}
        <Router/>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
