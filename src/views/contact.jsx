import "../styles/contact.css";

export default function Contact() {
  return (
    <main>
      <section className="titre-contact">
        <h2>Contact</h2>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
      </section>
      <section className="contenu">
        <h2>Formulaire de contact</h2>
        <form>
          <label for="Votre nom"></label>
          <br />
          <input
            type="text"
            id="Votre nom"
            name="Votre nom"
            placeholder="Votre nom"
          />
          <br />
          <label for="Votre adresse email"></label>
          <br />
          <input
            type="text"
            id="Votre adresse email"
            name="Votre adresse email"
            placeholder="Votre adresse email"
          />
          <br />
          <label for="Votre numéro de téléphone"></label>
          <br />
          <input
            type="text"
            id="Votre numéro de téléphone"
            name="Votre numéro de téléphone"
            placeholder="Votre numéro de téléphone"
          />
          <br />
          <label for="Sujet"></label>
          <br />
          <input type="text" id="Sujet" name="Sujet" placeholder="Sujet" />
          <br />
          <label for="Votre message"></label>
          <textarea name="Votre message" id="Votre message">
            Votre message
          </textarea>
          <br />
          <input class="button-envoyer" type="submit" value="Envoyer" />
        </form>
        <div>
          <h2>Mes coordonnées</h2>
          <h3>John Doe</h3>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon,France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d356515.6662108406!2d4.5778205!3d45.7255065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb658c20e5db%3A0x9717738eac4b2b33!2sRue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1744911483094!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
