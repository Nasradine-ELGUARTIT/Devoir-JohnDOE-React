import "../styles/portfolio.css";
export default function Portfolio() {
  return (
    <section class="portfolio">
      <h2>Portfolio</h2>
      <p>Voici quelques-unes de mes réalisations</p>
      <div class="projects">
        <div class="project">
          <img src="../img/portfolio/fresh-food.jpg" alt="Fresh Food" />
          <h3>Fresh Food</h3>
          <p>Site de vente de produits frais en ligne</p>
          <p>Site réalisé avec : PHP, MySQL</p>
          <a href="#" target="_blank">
            Voir le site
          </a>
        </div>
        <div class="project">
          <img
            src="../img/portfolio/restaurant-japonais.jpg"
            alt="Restaurant Akira"
          />
          <h3>Restaurant Akira</h3>
          <p>Site de restaurant</p>
          <p>Site réalisé avec : WordPress</p>
          <a href="#" target="_blank">
            Voir le site
          </a>
        </div>
        <div class="project">
          <img
            src="../img/portfolio/espace-bien-etre.jpg"
            alt="Espace bien-être"
          />
          <h3>Espace bien-être</h3>
          <p>Site de spa</p>
          <p>Site réalisé avec : Laravel</p>
          <a href="#" target="_blank">
            Voir le site
          </a>
        </div>
        <div class="project">
          <img src="../img/portfolio/seo.jpg" alt="SEO" />
          <h3>SEO</h3>
          <p>Amélioration du référencement d'un site e-commerce</p>
          <p>Utilisation des outils SEO</p>
          <a href="#" target="_blank">
            Voir le site
          </a>
        </div>
        <div class="project">
          <img src="../img/portfolio/coder.jpg" alt="API" />
          <h3>Création d'une API</h3>
          <p>Création d'une API RESTfull</p>
          <p>PHP - Symfony</p>
          <a href="#" target="_blank">
            Voir le site
          </a>
        </div>
        <div class="project">
          <img
            src="../img/portfolio/screens.jpg"
            alt="Maquette d'un site web"
          />
          <h3>Maquette d'un site web</h3>
          <p>Création du prototype d'un site web</p>
          <p>Réalisé avec : Figma</p>
          <a href="#" target="_blank">
            Voir le site
          </a>
        </div>
      </div>
    </section>
  );
}
