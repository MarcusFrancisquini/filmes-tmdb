import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const imageURL = "https://image.tmdb.org/t/p/original/";

function MovieCard({ movie }) {
  return (
    <>
      <div className="card">
        {movie.poster_path ? (
          <img
            className="img-card"
            src={imageURL + movie.poster_path}
            alt={movie.title}
          />
        ) : (
          <p className="img-erro">Imagem não disponível</p>
        )}
        <div className="card-content">
          <h4 className="titulo-filme">{movie.title}</h4>
          <div className="nota">
            <FaStar className="star-icon" />
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <div className="btn-container">
            <Link className="btn-detalhes" to={`/movie/${movie.id}`}>
              Detalhes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
