const MovieDetailsComponent = ({
  title,
  score,
  overview,
  genres,
  urlImg,
  year,
}) => {
  return (
    <div>
      <div>
        <img src={urlImg} alt={`Poster ${title}`} />
      </div>
      <div>
        <h2>
          {title}({year})
        </h2>
        <span>User Score : {score}%</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;
