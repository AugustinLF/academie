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
                        Avec{" "}
                        <InnerLink to="/fr/maarten-koningsberger">
                            Maarten Koninsberger
                        </InnerLink>{" "}
                        ce stage de chant associe technique vocale et interprétation de la musique
                        baroque.
                    </ListItem>
                </List>
                <p>
                    Après un cours collectif sur la posture et la respiration, cours qui ouvre la
                    journée, chaque stagiaire reçoit un cours individuel de technique vocale avec
                    Maarten Koninsberger et travaille avec leurs chefs de chant{" "}
                    <InnerLink to="/fr/helene-dufour">Hélène Dufour</InnerLink> et{" "}
                    <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>.
                    <p />
                    La journée se conclut sous la forme d'une masterclasse qui sera consacrée aux
                    quatre œuvres majeures de J.S. Bach : Passion selon Saint-Jean, Passion selon
                    Matthieu, Messe en si, Oratorio de Noël.
                </p>
                <List>
                    <ListItem>
                        Avec <InnerLink to="/fr/josep-cabre">Josep Cabré</InnerLink>, les stagiaires
                        travaillent Jephté de Carrisimi sous la forme d'un atelier journalier de 3
                        heures conduisant à une restitution publique à la fin du stage.
                    </ListItem>
                </List>
            </div>
        }
    />
);

export default Vocal;
