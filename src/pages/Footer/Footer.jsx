import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
        useEffect(() => {
          const toTopButton = document.getElementById("toTopButton");
      
          if (toTopButton) {
            const toggleToTopButton = () => {
              if (window.scrollY > 200) {
                toTopButton.style.display = "block";
              } else {
                toTopButton.style.display = "none";
              }
            };
      
          window.addEventListener("scroll", toggleToTopButton);
          return () => window.removeEventListener("scroll", toggleToTopButton);
        }
        }, []);      
  return (
    <footer>
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col mb-4">
            <h5>John Doe</h5>
            <address>
              40 rue Laure Dieblod <br />
              69009 Lyon, France <br />
              Téléphone : 06 20 30 40 50
            </address>
            <div>
              <a
                href="https://api.github.com/users/github-john-doe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icone-link"
                  src="/images/Footer/github.png"
                  alt="Logo de github"
                />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icone-link"
                  src="/images/Footer/X.png"
                  alt="Logo de Twitter"
                />
              </a>
              <a
                href="https://www.linkedin.com/learning?src=go-pa&veh=null&trk=sem-ga_campid.21301455506_asid.163286454915_crid.699771781329_kw.linkedin%20learning_d.c_tid.kwd-47311766595_n.g_mt.e_geo.9111345&mcid=7198411097454903333&gclid=Cj0KCQjws560BhCuARIsAHMqE0EMtdvIU8a2r5GwYV5xhvo6AOXzg6HV8aj-eVs-NO1BPxObhzNOG7EaAqUZEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icone-link"
                  src="/images/Footer/linkedin.png"
                  alt="Logo de Linkedin"
                />
              </a>
            </div>
          </div>
          <div className="col mb-4">
            <h5>Liens utiles</h5>
            <ul>
              <li>
                <NavLink className="link-style" to="/">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Accueil
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="#about">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> A propos
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Service">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Services
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Contact">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Me contacter
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Mention">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul>
              <li>
                <NavLink className="link-style" to="/Realisation">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Fresh food
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Realisation">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Restaurant Akira
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Realisation">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Espace bien-être
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col mb-4">
            <h5>Mes derniers articles</h5>
            <ul>
              <li>
                <NavLink className="link-style" to="/Blog">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Coder son site en HTML/CSS
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Blog">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Vendre ses produits sur le
                  web
                </NavLink>
              </li>
              <li>
                <NavLink className="link-style" to="/Blog">
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#0084ff",}} /> Se positionner sur Google
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-footer bg-dark text-body-secondary">
        <p className="copyright text-center">© Designed by John Doe</p>
        <a href="#top" className="button-back">Retour en haut</a>
      </div>
    </footer>
  );
};

export default Footer;
