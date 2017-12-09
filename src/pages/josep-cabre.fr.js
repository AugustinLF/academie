import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import josep from "../josep.jpg";

const Josep = () => (
    <InnerPage
        name="Josep Cabré"
        title="Chœur et chant"
        imgUrl={josep}
        content={
            <div>
                <p>
                    Longtemps collaborateur d'ensembles prestigieux parmi lesquels on pourra citer
                    Hesperion XX, le Huelgas Ensemble, la Chapelle Royale, l'ensemble Organum,
                    l’ensemble Gilles Binchois ou l’ensemble Sequentia pour des répertoires allant
                    du Moyen Age à l'époque baroque, Josep Cabré est toujours collaborateur de
                    l'Ensemble Daedalus et de l'organiste Jean-Charles Ablitzer.
                </p>
                <p>
                    Membre fondateur du quatuor vocal La Colombina, ensemble avec lequel il a
                    développé une partie importante de son activité en concert comme en
                    enregistrement, il est aussi régulièrement invité pour des stages d’enseignement
                    (Université de Mexico, Séminaires de Musique Ancienne de Bariloche en Argentine,
                    Festival des Flandres ou le Centre International des Chemins du Baroque....). Il
                    est également enseignant à Musikene, École Supérieure de Musique du Pays Basque
                    à Saint Sébastien et au CRR de Perpignan.
                </p>
                <p>
                    Fondateur de la Compagnie Musicale pour la pratique des répertoires les moins
                    habituels des siècles baroques, du plain chant à la polyphonie en quatuor
                    masculin, il a été chargé de la direction musicale de la Capilla Peñaflorida à
                    Saint Sébastien, au Pays Basque puis a été directeur musical du Chœur de Chambre
                    de Pampelune, en Navarre, avec lequel il a développé une activité croissante
                    d’interprétation et d'enregistrement des répertoires hispaniques de la
                    renaissance et du baroque.
                </p>
                <p>
                    Les activités de Josep Cabré comprennent également de nombreuses émissions radio
                    (Radio France, BRT de Bruxelles, Radio Nacional de España...) ainsi que près
                    d'une centaine d'enregistrements discographiques (ACCENT, Harmonia Mundi,
                    Almaviva, Astrée-Auvidis, Tactus, K617, NB), bon nombre desquels se sont vus
                    décerner des prix de la critique par la presse spécialisée.
                </p>
            </div>
        }
    />
);
export default Josep;
