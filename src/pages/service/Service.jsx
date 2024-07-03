const Service = () => {
  return (
    <div>
      <img
        className="img-fluid"
        src="/images/Services/banner.jpg"
        alt="Bannière bleu"
      />
      <div className="text-center">
        <h1 className="text-uppercase">mon offre de services</h1>
        <h2>Voici les prestations sur lesquelles je peux intervenir.</h2>
        <hr className="my-4 border-primary border-2 w-25 mx-auto opacity-100" />
      </div>
      <div className="container">
        <div className="row mx-auto p-2">
          <div className="col-12 col-md-4 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
              <img
                src="/images/Services/fichier.png"
                className="card-img-top mx-auto mt-3"
                style={{ width: "20%" }}
                alt="icone fichier "
              />
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
              <img
                src="/images/Services/loupe.png"
                className="card-img-top mx-auto mt-3"
                style={{ width: "20%" }}
                alt="Icone d'une loupe"
              />
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
              <img
                src="/images/Services/ordinateur.png"
                className="card-img-top mx-auto mt-3"
                style={{ width: "20%" }}
                alt="Icone d'un écran d'ordinateur"
              />
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
