import Header from "../header/Header";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faTv,
  faMagnifyingGlassDollar,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <Header
        title="Portfolio"
        subtitle="Voici quelques-unes de mes réalisations"
        imageUrlBase="/images/Header/banner"
      />

      <div className="container">
        <div className="row mx-auto p-2">
          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div
              className="card text-center h-100 d-flex flex-column service-card"
              style={{ width: "20rem" }}
            >
              <FontAwesomeIcon
                className="service-icone"
                icon={faTv}
                style={{
                  color: "#0084ff",
                  fontSize: "3rem",
                  marginTop: "20px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">UX Design</h5>
                <p className="card-text">
                  L'<strong>UX Design</strong> est une methode de conception
                  centrée sur l'utilisateur. Son but est d'offrir une expérience
                  de navigation otpimale à l'internaute.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div
              className="card text-center h-100 d-flex flex-column service-card"
              style={{ width: "20rem" }}
            >
              <FontAwesomeIcon
                className="service-icone"
                icon={faFileCode}
                style={{
                  color: "#0084ff",
                  fontSize: "3rem",
                  marginTop: "20px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">développement web</h5>
                <p className="card-text">
                  Le <strong>développement de site web</strong> repose sur
                  l'utilisation des langages HTML, CSS, JavaScript et PHP.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div
              className="card text-center h-100 d-flex flex-column service-card"
              style={{ width: "20rem" }}
            >
              <FontAwesomeIcon
                className="service-icone"
                icon={faMagnifyingGlassDollar}
                style={{
                  color: "#0084ff",
                  fontSize: "3rem",
                  marginTop: "20px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">référencement</h5>
                <p className="card-text">
                  Le <strong>référencement natuel d'un site</strong>, aussi
                  appelé SEO, consiste à mettre des techniques en oeuvre pour
                  améliorer sa position dans les résultats des moteurs de
                  recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
