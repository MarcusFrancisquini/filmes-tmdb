/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail";

const movieURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "298a307fe19336b6a3dbbd8843b20430";

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  function getMovie() {
    axios({
      method: "get",
      url: `${movieURL}${id}`,
      params: {
        //! required
        api_key: apiKey,
        //? optional
        language: "pt-BR",
      },
    }).then((response) => {
      setMovie(response.data);
      //console.log(response.data);
    });
  }

  useEffect(() => {
    getMovie();
  }, []);

  return <>{movie ? <MovieDetail movie={movie} /> : <p>Carregando...</p>}</>;
}

export default Movie;
