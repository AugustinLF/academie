import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Stage de chant"
        imgUrl={vocalImage}
        content={
            <div>
                <p>Les stagiaires choisissent parmi deux formules :</p>
                <List>
                    <ListItem>
                        Avec Maarten Koninsberger (+ lien) le stage associe technique vocale et
                        interprétation de la musique baroque. Les chanteurs partageront leur temps
                        entre répertoire soliste, travail de rôle et musique d’ensemble.
                    </ListItem>
                </List>
                <p>
                    Chaque stagiaire reçoit quotidiennement un cours de technique vocale avec
                    Maarten Koninsberger. Avec{" "}
                    <InnerLink to="/fr/helene-dufour">Hélène Dufour</InnerLink> et{" "}
                    <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>, les
                    stagiaires travaillent, soit de façon individuelle en interprétation, soit en
                    petit groupe en musique de chambre.
                </p>
                <List>
                    <ListItem>
                        Avec <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink>, les stagiaires
                        travaillent (œuvre à préciser utlérieurement) sous la forme d'un atelier
                        journalier de 3 heures conduisant à une restitution publique à la fin du
                        stage.
                    </ListItem>
                </List>
            </div>
        }
    />
);

export default Vocal;
