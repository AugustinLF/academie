import React from "react";
import g from "glamorous";

import {List, ListItem, InnerLink, Information} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Taller de cant"
        imgUrl={vocalImage}
        content={
            <div>
                <p>Els inscrits participants triaran entre dues fòrmules:
 </p>
     <List>
<ListItem>
                    Amb Maarten Koningsberger aquest taller associa tècnica vocal i interpretació de la música barroca. Els
                    cantants dividiran el seu temps entre repertori solista, treball de protagonista
                    i de música de conjunt. Cada dia començarà amb un curs col·lectiu sobre
                    qüestions relatives a la posició del cos i a la respiració.
   
                <p>
                    Cada participant rebrà diàriament un curs de tècnica vocal amb{" "}
                    <InnerLink to="/ca/maarten-koningsberger">Maarten Koningsberger</InnerLink>. Amb{" "}
                    <InnerLink to="/ca/helene-dufour">Hélêne Dufour</InnerLink> i{" "}
                    <InnerLink to="/ca/stefano-intrieri">Stefano Intrieri </InnerLink> treballaran
                    de manera individual la interpretació, així com en petit grup de música de
                    cambra.
                </p>
      </ListItem>
</List>
    <List>
<ListItem>
    Amb {" "} <InnerLink to="/ca/josep-cabre">Josep Cabré</InnerLink> els participants al curs treballarem sobre una 
    de les històries sagrades - oratoris de Marc-Antoine Charpentier. 
    L’obra escollida ho serà en funció dels cantants inscrits i/o seleccionats.
    </ListItem>
</List>
                <p>
Es tractarà d’una d’aquestes dues obres:
<ul>
<NestedListItem>Marc-Antoine Charpentier: Sacrificium Abrahae</NestedListItem>
<NestedListItem>Marc-Antoine Charpentier: Le Reniement de Saint Pierre</NestedListItem>
</p>
                <p>
Amb el treball de muntatge es parlarà tambe de diversos aspectes en relació amb les obres: relació text-música, 
    aproximació retòrica, articulació i silenci expressiu, notes iguals o desiguals 
    a partir dels textos del mateix Charpentier, pronúncia del llatí: a la francesa? italià eclesiàstic? alguna altra?…
     </ul>
    </p>
      </ListItem>
</List>
            </div>
        }
    />
);

export default Vocal;
