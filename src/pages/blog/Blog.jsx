import "../../index.css";
import "./Blog.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Header
        title="BLOG"
        subtitle="Retrouvez ici quelques articles sur le développement web."
        imageUrlBase="/images/Header/banner"
      />
        <div className="container">
          <div className="row mx-auto p-2">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="/images/Blog/coder.jpg"
                  className="card-img-top"
                  alt="Bloc de code"
                />
                <div className="card-body">
                  <h5 className="card-title">Coder son site en HTML et CSS</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/Blog" className="btn btn-outline-primary">
                    Voir
                  </Link>
                </div>
                <div className="card-footer">
                  <small>Publié le 22 août 2022</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="/images/Blog/croissance.jpg"
                  className="card-img-top"
                  alt="Cinq piles de pièces, de plus en plus grande"
                />
                <div className="card-body">
                  <h5 className="card-title">Vendre ses produits sur le web</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/Blog" className="btn btn-outline-primary">
                    Voir
                  </Link>
                </div>
                <div className="card-footer">
                  <small>Publié le 20 août 2022</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="/images/Blog/google.jpg"
                  className="card-img-top"
                  alt="Ordinateur portable qui affiche la page google"
                />
                <div className="card-body">
                  <h5 className="card-title">Se positionner sur Google</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/Blog" className="btn btn-outline-primary">
                    Voir
                  </Link>
                </div>
                <div className="card-footer">
                  <small>Publié le 1 août 2022</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="/images/Blog/screens.jpg"
                  className="card-img-top"
                  alt="Un ordinateur, un ordinateur portable et une tablette, posé sur une table"
                />
                <div className="card-body">
                  <h5 className="card-title">Coder en responsive design</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/Blog" className="btn btn-outline-primary">
                    Voir
                  </Link>
                </div>
                <div className="card-footer">
                  <small>Publié le 31 juillet 2022</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="/images/Blog/seo.jpg"
                  className="card-img-top"
                  alt="brainstorming avec le mot SEO"
                />
                <div className="card-body">
                  <h5 className="card-title">Techniques de référencement</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/Blog" className="btn btn-outline-primary">
                    Voir
                  </Link>
                </div>
                <div className="card-footer">
                  <small>Publié le 30 juillet 2022</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="/images/Blog/technos.png"
                  className="card-img-top"
                  alt="Différents icones d'applications"
                />
                <div className="card-body">
                  <h5 className="card-title">Apprendre à coder</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/Blog" className="btn btn-outline-primary">
                    Voir
                  </Link>
                </div>
                <div className="card-footer">
                  <small>Publié le 12 juillet 2022</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Blog;
