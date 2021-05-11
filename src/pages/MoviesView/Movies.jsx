import React, { Component } from 'react';
import MovieList from '../../component/MovieList/MovieList';
import filmotekaApiService from '../../api/getApiClass';

class Movies extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.state.query) {
      this.fetchMovie(this.getQuery(this.props));
    }
  }
  componentDidMount() {
    const query = this.getQuery(this.props);
    if (!query) return;
    this.fetchMovie(query);
  }
  getQuery(props) {
    const data = props.location.search;
    const searchQuery = new URLSearchParams(data);
    return searchQuery.get('query');
  }

  async fetchMovie(movieQuery) {
    const movie = await filmotekaApiService.fetchSearch(movieQuery);
    this.setState({ movies: movie.results });
  }

  onChangeQuery = () => {
    this.props.history.push({
      search: `query=${this.state.query}`,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.onChangeQuery();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { movies, query } = this.state;
    return (
      <>
        <h1>MoviesPage</h1>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            name="query"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default Movies;
