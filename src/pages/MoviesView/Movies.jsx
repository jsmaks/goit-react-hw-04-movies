import React, { Component } from 'react';
import MovieList from '../../component/MovieList/MovieList';
import filmotekaApiService from '../../api/getApiClass';

class Movies extends Component {
  state = {
    searchQuery: '',
    movies: [],
    query: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovie();
    }
  }

  async fetchMovie() {
    const { searchQuery } = this.state;
    const movie = await filmotekaApiService.fetchSearch(searchQuery);
    this.setState({ movies: movie.results });
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      error: null,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.onChangeQuery(query);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  reset = () => {
    this.setState({ name: '' });
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
