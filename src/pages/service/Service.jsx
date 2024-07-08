import Header from "../header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faTv, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <div>
        <Header
            title="mon offre de services"
            subtitle="Voici les prestations sur lesquelles je peux intervenir."
            imageUrl="/images/Blog/banner.jpg"
            />
      
      <div className="container">
        <div className="row mx-auto p-2">
          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
            <FontAwesomeIcon icon={faTv} style={{color: "#0084ff", fontSize: "3rem"}} />
              <div class="card-body">
                <h5 class="card-title">UX Design</h5>
                <p class="card-text">
                  L'UX Design est une methode de conception centrée sur
                  l'utilisateur. Son but est d'offrir une expérience de
                  navigation otpimale à l'internaute.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
            <FontAwesomeIcon icon={faFileCode} style={{color: "#0084ff", fontSize: "3rem"}} />
              <div class="card-body">
                <h5 class="card-title text-uppercase">développement web</h5>
                <p class="card-text">
                  Le développement de site web repose sur l'utilisation des
                  langages HTML, CSS, JavaScript et PHP.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
            <FontAwesomeIcon icon={faMagnifyingGlassDollar} style={{color: "#0084ff", fontSize: "3rem"}} />
              <div class="card-body">
                <h5 class="card-title text-uppercase">référencement</h5>
                <p class="card-text">
                  Le référencement natuel d'un site , aussi appelé SEO, consiste
                  à mettre des techniques en oeuvre pour améliorer sa position
                  dans les résultats des moteurs de recherche.
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
