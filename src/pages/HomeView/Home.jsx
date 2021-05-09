import React, { Component } from 'react';
import MovieList from '../../component/MovieList/MovieList';
import filmotekaApiService from '../../api/getApiClass';

class Home extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const trendingMovies = await filmotekaApiService.fetchResults();
    this.setState(() => ({ movies: trendingMovies }));
  }
  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending movie</h1>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    );
  }
}

export default Home;
