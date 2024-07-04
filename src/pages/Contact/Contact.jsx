import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="overlay"></div>
        <img
          className="img-back"
          src="/images/Contact/contact-bg.jpg"
          alt="bannière de fond"
        />
      </div>
      <div
        id="about"
        className="about container row mx-auto my-5 rounded p-5 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <div className="text-center">
          <h1 className="text-uppercase">me contacter</h1>
          <h2>
            Pour me contacter en vue d'un entretien ou d'une futur
            collaboration, merci de remplir le formulaire de contact.
          </h2>
          <hr className="my-4 border-primary border-2 w-25 mx-auto opacity-100" />
        </div>
        <div className="col-md-6">
          <h3 className="pb-2 mb-4 border-bottom border-primary border-2">
            Formulaire de contact
          </h3>
          <form>
            <div class="mb-3">
              <label for="nom" class="form-label visually-hidden">
                Nom
              </label>
              <input
                type="text"
                class="form-control"
                id="nom"
                placeholder="Votre nom"
              />
            </div>
            <div class="mb-3">
              <label for="prenom" class="form-label visually-hidden">
                Votre adresse email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Votre adresse email"
              />
            </div>
            <div class="mb-3">
              <label for="telephone" class="form-label visually-hidden">
                Vote numéro de téléphone
              </label>
              <input
                type="text"
                class="form-control"
                id="telephone"
                placeholder="Votre numéro de téléphone"
              />
            </div>
            <div class="mb-3">
              <label for="objet" class="form-label visually-hidden">
                Sujet
              </label>
              <input
                type="text"
                class="form-control"
                id="objet"
                placeholder="Sujet"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label visually-hidden">
                Votre message
              </label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                placeholder="Votre message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3 className="pb-2 mb-4 border-bottom border-primary border-2">
            Mes coordonnées
          </h3>
          <div>
            <p className="text-capitalize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>{" "}
              40 rue laure diebold, 69009 lyon, france
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>{" "}
              06 20 30 40 50
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540006!2d4.796403975250969!3d45.77866571240359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1720023535518!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
