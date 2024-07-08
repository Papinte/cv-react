import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import Contact from "../Contact/Contact";
import Realisation from "../realisation/Realisation";
import Service from "../service/Service";
import Mention from "../mention/Mention";

const Nav = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand text-uppercase" to="/">
            John Doe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/Service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/Realisation">
                  Réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/Blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/Contact">
                  me contacter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Realisation" element={<Realisation />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Mention" element={<Mention />}></Route>
      </Routes>
    </header>
  );
};

export default Nav;
