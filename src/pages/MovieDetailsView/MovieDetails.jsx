import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import filmotekaApiService from '../../api/getApiClass';
import MovieDetailsComponent from '../../component/MovieDetails/MovieDetailsComponent';
import CastList from '../../component/Cast/CastList';
import Reviews from '../../component/Reviews/Reviews.jsx';

class MovieDetails extends Component {
  state = {
    title: null,
    score: null,
    overview: null,
    genres: [],
    img: null,
    year: null,
    movieId: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movieInfo = await filmotekaApiService.fetchMovie(movieId);
    this.setState({ ...movieInfo, movieId });
  }
  handleGoBack = () => {
    const { history, location } = this.props;
    const { state } = location;
    if (state && state.from) {
      return history.push(state.from);
    }

    history.push('/');
  };
  render() {
    const { url } = this.props.match;
    const { location, match } = this.props;
    const { title, overview, score, genres, img, year, movieId } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>
        <MovieDetailsComponent
          title={title}
          overview={overview}
          score={score}
          genres={genres}
          urlImg={img}
          year={year}
        />
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: `${location.state.from}` },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: `${location.state.from}` },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route
          exact
          path={`${url}/cast`}
          render={props => {
            return movieId && <CastList movieId={movieId} />;
          }}
        />
        <Route
          exact
          path={`${url}/reviews`}
          render={props => {
            return movieId && <Reviews movieId={movieId} />;
          }}
        />
      </div>
    );
  }
}

export default MovieDetails;
