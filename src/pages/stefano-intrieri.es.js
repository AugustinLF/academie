import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import stefano from "../stefano.jpg";

const Stefano = () => (
    <InnerPage
        name="Stefano Intrieri"
        title="Lyric coach"
        imgUrl={stefano}
        content={
            <div>
                <p>
                    Nascut a Milà, va obtenir els diplomes d’orgue i de clavecí a Itàlia i es va
                    perfeccionar els de clavecí i música de cambra en la classe de Ton Koopman al
                    Sweelinck-Conservatorium d’Amsterdam.
                </p>
                <p>
                    Ha col·laborat amb diversos cors i orquestres, com continuo i com solista, d’una
                    manera notable amb le Coro & Orchestra RAI – Milano, le Nederlands Omroep Koor
                    (Marcus Creed), Collegium ad Mosam, Il Concerto Barocco, le Choeur de Radio
                    France, l’Orchestre de Picardie, Le Capriccio Français, l’Ensemble Orchestral de
                    Paris (Ton Koopman), la Grande Écurie i la Chambre du Roy....
                </p>
                <p>
                    És el director musical del gruppo strumentale La Réjouissance. Titular del
                    Certificat d’Aptitude à l’enseignement de la musique ancienne, ha donat classes
                    al CRR de Paris, a la Maïtrise de Notre-Dame de Paris i al Pole Supérieur ’93 a
                    Aubervilliers – La Coumeuve. És l’ànima de nombroses iniciatives, com cursos,
                    conferències i master-classes i autor de diferents temàtiques relacionades amb
                    el repertori musical barroc.
                </p>
                <p>
                    Ha treballat també com director de cant per le Centre de la Voix – Fondation
                    Royaumont, le Centre de Musique Baroque de Versailles, l’Atelier Lyrique de
                    Tourcoing, Opera Zuid-Nederland i per a diverses produccions teatrals i ha
                    acompanyat les master-classes de Margreet Honig, Rachel Yakar, Howard Crook,
                    Maarten Koningsberger, Gérard Lesne, Andreas Scholl...
                </p>
            </div>
        }
    />
);
export default Stefano;
