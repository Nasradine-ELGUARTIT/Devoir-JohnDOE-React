export default function Home() {
  return (
    <div className="home">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <section class="HautDePage">
        <p>Bonjour, je suis John Doe </p>
        <p>Développeur web full stack</p>
        <button>En savoir plus</button>
      </section>
      <main>
        <section class="contenu">
          <section class="A-Propos">
            <h2>A propos</h2>
            <img src="/img/john-doe-about.jpg" alt="John Doe" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Optio, necessitatibus consectetur tempore perferendis
              nostrum,
              <br /> ex delectus reiciendis impedit aut iure enim placeat?
              Natus, neque at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Optio, necessitatibus consectetur tempore perferendis
              nostrum,
              <br /> ex delectus reiciendis impedit aut iure enim placeat?
              Natus, neque at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Optio, necessitatibus consectetur tempore perferendis
              nostrum,
              <br /> ex delectus reiciendis impedit aut iure enim placeat?
              Natus, neque at?
            </p>
          </section>

          <section class="skills">
            <h2>Mes compétences</h2>
            <div class="skill">
              <p>
                HTML5 <span>90%</span>
              </p>
              <div className="progress-bar1" style={{ width: "90%" }}></div>
            </div>
            <div class="skill">
              <p>
                CSS3 <span>80%</span>
              </p>
              <div className="progress-bar2" style={{ width: "80%" }}></div>
            </div>
            <div class="skill">
              <p>
                JAVASCRIPT <span>70%</span>
              </p>
              <div className="progress-bar3" style={{ width: "70%" }}></div>
            </div>
            <div class="skill">
              <p>
                PHP <span>60%</span>
              </p>
              <div className="progress-bar4" style={{ width: "60%" }}></div>
            </div>
            <div class="skill">
              <p>
                REACT <span>50%</span>
              </p>
              <div className="progress-bar5" style={{ width: "50%" }}></div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
