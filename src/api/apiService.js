const options = {
  API_KEY: 'ed4770d472da6341d2e53ccb9e288320',
  BASE_URL: 'https://api.themoviedb.org/3/',
  IMG_URL: 'https://image.tmdb.org/t/p/w500/',
};
const { API_KEY, BASE_URL, IMG_URL } = options;

export default class FilmotekaApiService {
  constructor(_params) {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchResults() {
    const urlPopular = `${BASE_URL}trending/all/day?api_key=${API_KEY}&page=${this.page}`;
    const response = await fetch(urlPopular);
    const moviesLists = await response.json();
    const {results} = moviesLists;
    return results;
  }
  async fetchSearch(movies) {
    const urlSearch = `${BASE_URL}search/movie?api_key=${API_KEY}&page=${this.page}&query=${movies}`;
    const response = await fetch(urlSearch);
    const moviesLists = await response.json();
    return moviesLists;
  }

  async fetchMovie(movieId) {
    const urlSearch = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
    const response = await fetch(urlSearch);
    const movieData = await response.json();
    console.log(movieData);
    const {
      
        title,
        overview,
        vote_average,
        genres,
        poster_path,
        release_date,
        original_name,
      
    } = movieData;
    const adapterResult = {
      title: title || original_name,
      score: vote_average * 10,
      overview: overview,
      genres: genres.flatMap(genre => genre.name).join(' '),
      img: `${IMG_URL}${poster_path}`,
      year: release_date.split('-')[0],
    };
    return adapterResult;
  }
  async fetchCredits(movieId) {
    const urlSearch = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(urlSearch);
    const movieData = await response.json();
    console.log(movieData);
    return movieData;
  }
  async fetchReviews(movieId) {
    const urlSearch = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`;
    const response = await fetch(urlSearch);
    const movieData = await response.json();
    return movieData;
  }
}
