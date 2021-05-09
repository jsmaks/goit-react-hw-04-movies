import { Component } from 'react';
import filmotekaApiService from '../../api/getApiClass';
class CastList extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;
    const castList = await filmotekaApiService.fetchCredits(movieId);
    this.setState({ cast: [...castList.cast] });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className="cast__list">
          {cast &&
            cast.map(act => (
              <li key={act.original_name}>
                <img
                  className="cast__list-item"
                  src={
                    act.profile_path &&
                    `https://image.tmdb.org/t/p/w500${act.profile_path}`
                  }
                  alt={`Poster ${act.name}`}
                />
                <p>{act.name}</p>
                <p>Character: {act.character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default CastList;
