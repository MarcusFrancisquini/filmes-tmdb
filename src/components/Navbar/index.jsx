import { BsFilm } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [busca, setBusca] = useState("");
  const navegar = useNavigate();

  function pesquisarFilme(e) {
    e.preventDefault();

    if (!busca) {
      return;
    } else {
      navegar(`/search?q=${busca}`);
      setBusca("");
    }

    //console.log(busca);
  }

  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <BsFilm className="logo-icon" />
          <h2>tmdb</h2>
        </Link>

        <form className="search-bar" onSubmit={pesquisarFilme}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setBusca(e.target.value)}
            value={busca}
          />
          <button type="submit">
            <BiSearchAlt2 className="search-icon" />
          </button>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
