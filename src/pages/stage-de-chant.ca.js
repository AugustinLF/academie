import React from "react";
import g from "glamorous";

import {List, ListItem, InnerLink} from "../components/base";
import vocalImage from "../vocal.png";
import InnerPage from "../components/innerPage";

const Vocal = () => (
    <InnerPage
        name="Taller de cant"
        imgUrl={vocalImage}
        content={
            <div>
                <p>
                    Aquest taller associa tècnica vocal i interpretació de la música barroca. Els
                    cantants dividiran el seu temps entre repertori solista, treball de protagonista
                    i de música de conjunt. Cada dia començarà amb un curs col·lectiu sobre
                    qüestions relatives a la posició del cos i a la respiració.
                </p>
                <p>
                    Cada participant rebrà diàriament un curs de tècnica vocal amb{" "}
                    <InnerLink to="/ca/maarten-koningsberger">Maarten Koningsberger </InnerLink>.
                    Amb <InnerLink to="/ca/helene-dufour">Hélêne Dufour</InnerLink> i{" "}
                    <InnerLink to="/ca/stefano-intrieri">Stefano Intrieri </InnerLink> treballaran
                    de manera individual la interpretació, així com en petit grup de música de
                    cambra.
                </p>
     <p>
    Els participants al curs treballaran amb Josep Cabré l’oratori de Carissimi Jephte, en forma de taller diari 
    de 3 hores que ens ha de dur a una interpretació pública al final del curs. 
     </p>
            </div>
        }
    />
);

export default Vocal;
