import React from "react";
import g from "glamorous";

import {
    Link,
    InnerLink,
    List,
    ListItem,
    Information,
    NestedListItem,
    IframeContainer,
} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Stage de chant"
        imgUrl={vocalImage}
        content={
            <div>
                Avec <InnerLink to="/fr/maarten-koningsberger">Maarten Koningsberger</InnerLink> ce stage de chant associe
                technique vocale et interprétation de la musique baroque.
                <p>
                    Après un cours collectif sur la posture et la respiration, cours qui ouvre la
                    journée, chaque stagiaire reçoit un cours individuel de technique vocale avec
                    Maarten Koningsberger et travaille avec ses chefs de chant{" "}
                    <InnerLink to="/fr/helene-dufour">Hélène Dufour</InnerLink> et{" "}
                    <InnerLink to="/fr/stefano-intrieri">Stefano Intrieri</InnerLink>.
                </p>
                <p>
                    Les masterclasses qui rythment l’Académie seront consacrées en 2020 aux oratorios de Handel avec en premier lieu le Messie.
                </p>
            </div>
        }
    />
);

export default Vocal;
