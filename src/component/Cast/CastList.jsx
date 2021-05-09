import { Component } from 'react';
import filmotekaApiService from '../../api/getApiClass';
class CastList extends Component {
  state = {
    cast: [],
  };
  async componentDidMount () {
    // const {movieId} = this.props
    console.log(this.props.movieId);
  
    const castList = await filmotekaApiService.fetchCredits('460465');
    console.log(castList);
    this.setState({cast: [...castList.cast]})

  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast &&
            cast.map(act => (
              <li key={act.original_name}>{act.original_name}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default CastList;