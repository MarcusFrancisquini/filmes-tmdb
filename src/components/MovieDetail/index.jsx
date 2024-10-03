import { BsGraphUpArrow, BsWallet2, BsHourglassSplit } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
const imageURL = "https://image.tmdb.org/t/p/original/";

//? conversão de moeda
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

//? formatação do tempo de filme
function formatarHora(tempo) {
  const horas = Math.floor(tempo / 60);
  const minutos = tempo % 60;
  return `${horas}h ${minutos}m`;
}

function MovieDetail({ movie }) {
  return (
    <>
      <section className="filme-detalhes">
        <div className="imagem">
          {movie.poster_path ? (
            <img
              className="img-filme"
              src={imageURL + movie.poster_path}
              alt={movie.title}
            />
          ) : (
            <p className="img-erro">Imagem não disponível</p>
          )}
        </div>
        <div className="info-filme-container">
          <div className="basic-infos">
            <h2>{movie.title}</h2>
            <div className="nota-filme">
              <FaStar className="star-icon" />
              <p className="filme-votos">{movie.vote_average.toFixed(1)}</p>
            </div>
            {movie.tagline ? (
              <p className="filme-resumo">{movie.tagline}</p>
            ) : (
              <p>Resumo não disponível.</p>
            )}
          </div>
          {/* ORÇAMENTO */}
          <div className="info">
            <h3>
              <BsWallet2 className="info-icon" />
              Orçamento:
            </h3>
            <p>{formatarMoeda(movie.budget)}</p>
          </div>
          {/* RECEITA */}
          <div className="info">
            <h3>
              <BsGraphUpArrow className="info-icon" />
              Receita:
            </h3>
            <p>{formatarMoeda(movie.revenue)}</p>
          </div>
          {/* DURAÇÃO */}
          <div className="info">
            <h3>
              <BsHourglassSplit className="info-icon" />
              Duração:
            </h3>
            <p>{formatarHora(movie.runtime)}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieDetail;
