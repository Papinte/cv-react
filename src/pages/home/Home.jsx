import "../../index.css";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 1200px)" srcSet="/images/Home/hero-bg.jpg" />
        <source
          media="(min-width: 768px)"
          srcSet="/images/Home/hero-bg-tablette.jpg"
        />
        <img
          src="/images/Home/hero-bg-mobile.jpg"
          className="banner img-fluid"
          alt="Développeur web devant l'ordinateur"
        />
      </picture>
      <div
        id="text-banner"
        className="container text-center position-absolute top-50 start-50 translate-middle"
      >
        <h1 className="display-1">Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <a href="#about" className="btn btn-primary">
          En savoir plus
        </a>
      </div>
      <div
        id="about"
        className="about container row mx-auto my-5 rounded p-5 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <div className="col-md-6">
          <h3 className="pb-2 mb-4 border-bottom border-primary border-2">
            À propos
          </h3>
          <p>
            Passioné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d'
            <strong>intégrateur développeur web</strong> au CEF. Au cours de
            cette formation, j'ai pu acquérir des bases solides pour travailler
            dans le domaine du <strong>Développement web.</strong>
          </p>
          <p>
            Basé à Lyon je suis en recherche d'une alternance au sein d'une
            agence digitale pour consolider ma formation de{" "}
            <strong>développeur web full stack.</strong>
          </p>
          <p>
            J'accorde une attention particulière à la qualité du code que
            j'écris et je respecte les bonnes pratiques du Web.
          </p>
        </div>
        <div className="col-md-6">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/Home/john-doe-about-mobile.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/Home/john-doe-about.jpg"
            />
            <img
              className="img-fluid rounded"
              src="/images/Home/john-doe-about.jpg"
              alt="John doe en train de travailler"
            />
          </picture>
          <h3>Mes compétences</h3>
          <p>HTML5 90%</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-danger"
              style={{ width: "90%" }}
            ></div>
          </div>
          <p>CSS3 80%</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
          </div>
          <p>JAVASCRIPT 70%</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
          </div>
          <p>PHP 60%</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
          </div>
          <p>REACT 50%</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
