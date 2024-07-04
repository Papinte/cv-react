import Header from "../header/Header";

const Realisation = () => {
  return (
    <div>
      <Header
        title="portfolio"
        subtitle="Voici quelques-unes de mes réalisations"
        imageUrl="/images/Blog/banner.jpg"
      />
      <div className="container">
        <div className="row mx-auto p-2">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
              <img
                src="/images/Portfolio/fresh-food.jpg"
                class="card-img-top"
                alt="Panier de légumes"
              />
              <div class="card-body">
                <h5 class="card-title">Fresh food</h5>
                <p class="card-text">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <a href="#" class="btn btn-outline-primary">
                  Voir
                </a>
              </div>
              <div class="card-footer">
                <small>Site réalisé avec PHP et MySQL</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
              <img
                src="/images/Portfolio/restaurant-japonais.jpg"
                class="card-img-top"
                alt="Sushis sur un plateau"
              />
              <div class="card-body">
                <h5 class="card-title">Restaurant Akira</h5>
                <p class="card-text">
                  Réalisation d'un site vitrine.
                </p>
                <a href="#" class="btn btn-outline-primary">
                  Voir
                </a>
              </div>
              <div class="card-footer">
                <small>Site réalisé avec WordPress</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-center" style={{ width: "20rem" }}>
              <img
                src="/images/Portfolio/espace-bien-etre.jpg"
                class="card-img-top"
                alt="Buste de Bouddha avec des galets à côté"
              />
              <div class="card-body">
                <h5 class="card-title">Espace bien-être</h5>
                <p class="card-text">
                  Réalisation d'un site vitrine pour un praticien de bien-être.
                </p>
                <a href="#" class="btn btn-outline-primary">
                  Voir
                </a>
              </div>
              <div class="card-footer">
                <small>Site réalisé en HTML/CSS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Realisation;
