import React, { useState } from "react";
import "../styles/mention.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mentions() {
  return (
    <section>
      <div className="underline">
        <h2>Mentions légales</h2>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body>
            <h3>John Doe</h3>
            <div className="liens-mention">
              <p>
                <a href="https://maps.app.goo.gl/YXYu5vobsjNEgE1U8">
                  <img src="../icons/pin-demplacement.png" /> 40 rue Laure
                  Diebold
                  <br />
                  69009 Lyon,France
                </a>
              </p>
              <p>
                <a href="tel:+1020304050">
                  <img src="../icons/appel.png" />
                  10 20 30 40 50
                </a>
              </p>
              <p>
                <a href="mailto:john.doe@gmail.com">
                  <img src="../icons/email.png" />
                  john.doe@gmail.com
                </a>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h3>alwaysdata</h3>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h3>Crédits</h3>
            <p>
              Ce site a etait réalisé par John Doe, étudiant au Centre Européen
              de formation.
            </p>
            <p>
              Les images utilisées sur ce site sont libres de droits et ont été
              obtenus sur le site pixabay
            </p>
            <p>
              La faviconcde ce site a été fourniepar John doe incons erstellt
              von freepik- Flaticon
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}
