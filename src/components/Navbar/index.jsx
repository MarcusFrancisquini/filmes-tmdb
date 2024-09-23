import { BsFilm } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <BsFilm className="logo-icon" />
          <h2>tmdb</h2>
        </Link>

        <div className="search-bar">
          <input type="text" placeholder="Busque um filme" />
          <button type="submit">
            <BiSearchAlt2 className="search-icon" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
