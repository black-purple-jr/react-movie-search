import { Link } from "react-router-dom";
import "../styles/NavBar.css"


export default function NavBar() {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie search app</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  )
}

