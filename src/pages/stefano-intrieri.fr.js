import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import stefano from "../stefano.jpg";

const Stefano = () => (
    <InnerPage
        name="Stefano Intrieri"
        title="Chef de chant"
        imgUrl={stefano}
        content={
            <div>
                <p>
                    Né a Milano, il obtient ses diplômes d’Orgue et de Clavecin en Italie et se
                    perfectionne au clavecin et en musique de chambre dans la classe de Ton Koopman
                    au Sweelinck- Conservatorium d’Amsterdam.
                </p>
                <p>
                    Il collabore avec plusieurs chœurs et orchestres, comme continuiste et comme
                    soliste, notamment avec le Coro & Orchestra RAI - Milano, le Nederlands Omroep
                    Koor ( Marcus Creed), Collegium ad Mosam, Il Concerto Barocco , le Chœur de
                    Radio France, l’Orchestre de Picardie, Le Capriccio françai, l’Ensemble
                    Orchestral de Paris (Ton Koopman), La Grande Écurie et la Chambre du Roy...
                </p>
                <p>
                    Il est le directeur musical du gruppo strumentale La Réjouissance . Titulaire
                    du Certificat d’Aptitude à l’enseignement de la musique ancienne, il a
                    enseigné au CRR de Paris, à la Maîtrise de Notre-Dame de Paris et au Pole
                    Supérieur ’93 à Aubervilliers – La Courneuve. Il anime également de
                    nombreuses initiatives, telles que stages, conférences et master-classes,
                    autour de différentes thématiques liées au répertoire musical baroque
                </p>
                <p>
                    Il a également travaillé comme chef de chant pour le Centre de la Voix -
                    Fondation Royaumont, le Centre de Musique Baroque de Versailles, l’Atelier
                    Lyrique de Tourcoing, Opera Zuid-Nederland et pour plusieurs productions
                    théatrales, et a accompagné les masterclasses de Margreet Honig, Rachel Yakar,
                    Howard Crook, Maarten Koningsberger, Gérard Lesne, Andreas Scholl...
                </p>
                <p>
                    Stefano Intrieri est chef de chant pour le{" "}
                    <InnerLink to="/fr/stage-de-chant">stage de chant</InnerLink> et accompagnateur
                    pour le <InnerLink to="/fr/stage-choral">stage de chant choral</InnerLink>.
                </p>
            </div>
        }
    />
);
export default Stefano;
