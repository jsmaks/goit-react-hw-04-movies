import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import filmotekaApiService from '../../api/getApiClass';
import MovieDetailsComponent from '../../component/MovieDetails/MovieDetailsComponent'
import CastList from '../../component/Cast/CastList'
import Reviews from '../../component/Reviews/Reviews.jsx'

class MovieDetails extends Component {
    state = {
        title: null,
        score: null,
        overview: null,
        genres: [],
        img: null,
        year: null,
        movieId: 1,
      };
      async componentDidMount (){
        const { movieId } = this.props.match.params;
        const movieInfo = await filmotekaApiService.fetchMovie(movieId);
        this.setState({...movieInfo, movieId})
        
      }
    render() { 
      console.log(this.props.match);
        return ( 
            <div>
            {/* <button type="button" onClick={this.backToPrevPage}>
              Go back
            </button> */}
            < MovieDetailsComponent
              title={this.state.title}
              overview={this.state.overview}
              score={this.state.score}
              genres={this.state.genres}
              urlImg={this.state.img}
              year={this.state.year}
            />
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
            <Route
          exact
          path={`${this.props.match.url}/cast`}
          render={props => {return  this.state.movieId && <CastList movieId={this.state.movieId} />;}}
        />
        <Route
          exact
          path={`${this.props.match.url}/reviews`}
          render={props => {
            return (
              this.state.movieId && <Reviews movieId={this.state.movieId} />
            );
          }}
        />
            </div>
         );
    }
}
 
export default MovieDetails;