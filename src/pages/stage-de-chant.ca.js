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
                    Els participants al curs treballaran amb Josep Cabré l’oratori de Carissimi
                    Jephte, en forma de taller diari de 3 hores que ens ha de dur a una
                    interpretació pública al final del curs.
                </p>
    Autor generós, en repertoris profans i també religiosos, cal dir que bona part de la fama de Carissimi arriba amb els seus oratoris o històries sacres, deixant clara la forma del que a partir d'ara anomenarem "oratori". Entre els seus deixebles trobem músics com Marc-Antoine Charpentier o Alessandro Scarlatti. La pràctica totalitat de la seva música ens arriba en forma de còpies manuscrites, que han estat vitals per la conservació i la difusió de la seva obra, un cop perduts o destruïts els originals quan es va suspendre l'orde dels jesuïtes. No havent estat publicat mentre era viu, el gran nombre de còpies existents ens mostra també el seu grau de difusió.  
 </p>
                <p>
    La història de Jeftè no és gaire complicada: en tornar victoriós d'una batalla va cometre la imprudència de prometre a Déu, en sacrifici i acció de gràcies, la primera persona que es trobaria en tornar. La mala sort, o el destí, fa que aquesta persona sigui la seva pròpia filla. I amb aquesta base argumental es desenvolupa tot un seguit de recitatius, petites àries i cors, entre ells una emotiva lamentació de la filla, que és un reflex fidel dels estils musicals italians, i particularment romans, en aquesta meitat de segle XVII. Com d'altres compositors, contemporanis seus, Carissimi aconsegueix donar un ritme dramàtic i quasi teatral a aquesta història sacra, introduint el concepte de "cantata" a la música d'església i com a precursor del que més tard anomenarem "bel canto".
 </p>
                <p>
    Les sessions de treball que es proposen, ho fan amb la finalitat de muntar aquest oratori sencer, i ens faran trobar-nos amb la sensibilitat de l'època, el respecte del text i les seves referències retòriques, tant en les parts de recitatiu com en les àries o els cors. Una visió d'aquesta meitat de segle XVII italià que tant i més havia d'influenciar la música europea, i tot plegat fins avui mateix.
            </div>
        }
    />
);

export default Vocal;
