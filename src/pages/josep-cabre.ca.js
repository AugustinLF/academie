import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import josep from "../josep.jpg";

const Josep = () => (
    <InnerPage
        name="Josep Cabré"
        title="Cant i cor"
        imgUrl={josep}
        content={
            <div>
                <p>
                    Llargament col·laborador de prestigiosos conjunts entre els quals es pot citar
                    Hesperion XX, Huelgas Ensemble, la Chapelle Royales, el conjunt Organum, Gilles
                    Binchois o Sequentia per a repertoris que van des de l’Edat Mitjana fins a
                    l’època barroca. Josep Cabré col·labora amb l’Ensemble Daedalus i amb
                    l’organista Jean-Charles Abilizer.
                </p>
                <p>
                    Membre fundador del quartet vocal La Colombina, amb qui ha desenvolupat una part
                    important de la seva activitat concertística i d’enregistrament. Regularment és
                    convidat a fer cursos d’ensenyament (Universitat de Mèxic, Seminaris de Música
                    Antiga de Bariloche a Argentina, Festival de Flandes o al Centre International
                    des Chemins du Baoque...) És també professor a Musikene, Escola Superior de
                    Música del País Basc a Sant Sebastià i al CRR de Perpinyà.
                </p>
                <p>
                    Fundador de la Compagnie Musicale per a la pràctica de repertoris poc habituals
                    de l’època barroca, del cant pla a la polifonia en quartets masculins. Ha estat
                    també responsable de la direcció musical de la Capilla Peñaflorida a Sant
                    Sebastià, al País Basc, sent també director musical del Choeur de Chambre de
                    Pampelune de Navarra, amb el qual ha desenvolupat una gran activitat
                    d’interpretació i d’enregistrament de repertoris hispànics del renaixement i del
                    barroc.
                </p>
                <p>
                    Les activitats de Josep Cabré comprenent també nombroses emissions de radio
                    (RadioFrance, BRT de Bruseles, Radio Nacional de España...) així com sobre un
                    centenar d’enregistraments discogràfics (ACCENT, Harmonia Mundi, Almaviva,
                    Astrée-Auvidis, Tatus, K617, NB), a gran nombre dels quals la crítica i premsa
                    especialitzada ha otorgat diversos premis.
                </p>
            </div>
        }
    />
);
export default Josep;
