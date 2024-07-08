import "./Contact.css";
import React, { useState } from 'react';

function Contact () {
  // Déclaration des états pour chaque champ du formulaire
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification que tous les champs sont remplis
    if (!nom || !email || !telephone || !objet || !message) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    // Traitement du formulaire ici (ex. envoyer les données à un serveur)
    console.log({ nom, email, telephone, objet, message });
    // Réinitialisation des champs du formulaire
    setNom('');
    setEmail('');
    setTelephone('');
    setObjet('');
    setMessage('');
  }

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
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="nom" class="form-label visually-hidden">
                Nom
              </label>
              <input
                type="text"
                class="form-control"
                id="nom"
                placeholder="Votre nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
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
                value={objet}
                onChange={(e) => setObjet(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
            <i class="bi bi-geo-alt-fill"></i> 40 rue laure diebold, 69009 lyon, france
            </p>
            <p>
            <i class="bi bi-phone"></i> 06 20 30 40 50
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
