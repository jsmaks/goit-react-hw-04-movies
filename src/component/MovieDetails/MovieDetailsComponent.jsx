const MovieDetailsComponent = ({
  title,
  score,
  overview,
  genres,
  urlImg,
  year,
}) => {
  return (
    <div className="thumb">
      <div className="thumb__container">
        <img className="thumb__img"src={urlImg} alt={`Poster ${title}`} />
      </div>
      <div className="descr">
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
