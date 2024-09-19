import MovieCard from "../../components/MovieCard";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  function getTopMovies() {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: {
        //! required
        api_key: "298a307fe19336b6a3dbbd8843b20430",
        //? optional
        language: "pt-BR",
        page: "2",
      },
    }).then((response) => {
      setTopMovies(response.data.results);
      //console.log(response.data.results);
    });
  }

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="title-home">
        <h1>Melhores Filmes</h1>
      </div>
      <section className="cards-container">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default Home;
