import { BsFilm } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <BsFilm className="logo-icon" />
          <Link to="/" className="page-title">
            <h2>tmdb</h2>
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Find a film" />
          <button type="submit">
            <BiSearchAlt2 className="search-icon" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
