import { Component } from 'react';
import filmotekaApiService from '../../api/getApiClass';
class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    console.log(this.props);
    const response = await filmotekaApiService.fetchReviews(this.props.movieId);
    this.setState({ reviews: [...response] });
  }

  render() {
    return (
      <>
        {this.state.reviews.length === 0 && (
          <h3>We don't have any reviews for this movie</h3>
        )}
        {this.state.reviews.length > 0 && (
          <div>
            <h2>Reviews</h2>
            <ul>
              {this.state.reviews.map(item => (
                <li key={item.id}>
                  <p>Author: {item.author}</p>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Reviews;
