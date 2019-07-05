import React from "react";
import g from "glamorous";

import {Link, InnerLink, List, ListItem, Information, NestedListItem, IframeContainer} from "../components/base";
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
                        <InnerLink to="/fr/henk-neven">
                            Henk Neven
                        </InnerLink>{" "}
                        ce stage de chant associe technique vocale et interprétation de la musique
                        baroque.
                        <p>
                            Après un cours collectif sur la posture et la respiration, cours qui
                            ouvre la journée, chaque stagiaire reçoit un cours individuel de
                            technique vocale avec Henk Neven et travaille avec ses chefs
                            de chant <InnerLink to="/fr/helene-dufour">Hélène Dufour</InnerLink> et{" "}
                            <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>.
                        </p>
                        <p>
                            La journée se conclut sous la forme d'une masterclasse qui sera
                            consacrée aux quatre œuvres majeures de J.S. Bach : Passion selon
                            Saint-Jean, Passion selon Matthieu, Messe en si, Oratorio de Noël.
                        </p>
                       
                        <IframeContainer>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/haBIas7ATi4"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </IframeContainer>
                    </ListItem>
                </List>
            </div>
        }
    />
);

export default Vocal;
