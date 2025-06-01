import "../styles/services.css";
export default function Services() {
  return (
    <div className="offre">
      <section class="presentation">
        <h2>Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
      </section>
      <section class="services">
        <div class="service">
          <img class="icon" src="../icons/brush.svg" alt="pinceau" />
          <h2>UX Design</h2>
          <p>
            L'UX Design est une discipline qui consiste à concevoir des produits
            (sites web, applications mobiles, logiciels, objets connectés, etc.)
            en plaçant l'utilisateur au centre des préoccupations. L'objectif
            est de rendre l'expérience utilisateur la plus fluide et agréable
            possible.
          </p>
        </div>
        <div class="service">
          <img class="icon" src="../icons/code-slash.svg" alt="code-slash" />
          <h2>Développement web</h2>
          <p>
            Le développement de sites web consiste à créer des sites internet en
            utilisant des langages de programmation (HTML, CSS, JavaScript, PHP,
            etc.) et des frameworks (Bootstrap, React, Angular, etc.).
          </p>
        </div>
        <div class="service">
          <img class="icon" src="../icons/search.svg" alt="loupe" />
          <h2>Référencement</h2>
          <p>
            Le référencement naturel (SEO) est une technique qui consiste à
            optimiser un site web pour le faire remonter dans les résultats des
            moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est
            d'attirer un maximum de visiteurs qualifiés sur le site.
          </p>
        </div>
      </section>
    </div>
  );
}
