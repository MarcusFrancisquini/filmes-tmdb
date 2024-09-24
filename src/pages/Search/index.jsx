/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

const searchURL = "https://api.themoviedb.org/3/search/movie";
const apiKey = "298a307fe19336b6a3dbbd8843b20430";

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const queryString = searchParams.get("q");

  function getFilmePesquisado() {
    axios({
      method: "get",
      url: searchURL,
      params: {
        //! required
        api_key: apiKey,
        query: queryString,
        //? optional
        language: "pt-BR",
        page: "1",
      },
    }).then((response) => {
      setMovies(response.data.results);
      //console.log(response.data.results);
    });
  }

  useEffect(() => {
    getFilmePesquisado(`${searchURL}?${apiKey}&query=${queryString}`);
  }, [queryString]);

  return (
    <>
      <div className="title-search">
        <h1>
          Resultados para: <span className="query-text">{queryString}</span>
        </h1>
      </div>
      <section className="cards-container">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h2>Nenhum filme encontrado.</h2>
        )}
      </section>
    </>
  );
}

export default Search;
