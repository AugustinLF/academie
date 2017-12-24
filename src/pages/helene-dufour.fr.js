import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import helene from "../helene.jpg";

const Helene = () => (
    <InnerPage
        name="Hélène Dufour"
        title="Clavecin et chef de chant"
        imgUrl={helene}
        content={
            <div>
                <p>
                    Après ses études de clavecin au CNSM de Paris, Hélène Dufour se perfectionne
                    avec Jos van Immerseel au Conservatoire Royal Flamand d’Anvers et travaille
                    l’orgue avec Jean Boyer. Elle est ensuite sélectionnée pour les tournées de
                    l’Orchestre Baroque de la Communauté Européenne où elle travaille avec Ton
                    Koopman, Roy Goodman et Jaap ter Linden. Elle joue ensuite pour les plus
                    importantes institutions de concerts (Festival d’Art Sacré de Paris, Fondation
                    Gulbenkian de Lisbonne, Festival d’Utrecht, Conservatoire de Moscou...).
                </p>
                <p>
                    Elle partage aujourd’hui son activité entre la musique de chambre (duo avec le
                    contre-ténor James Bowman, trio avec la Tempesta…), le continuo d’orchestre (Le
                    Capriccio Français, la Réjouissance…) et les solos (concertos de Bach, Manuel de
                    Falla…). Elle a réalisé de nombreux enregistrements : des motets baroques
                    français (Diapason d’Or), des concerti grossi avec l’ECBO. L’enregistrement avec
                    Patrick Bismuth consacré à des sonates du XVIIe a reçu le prix de la Fondazione
                    Cini de Venise, et celui des Sonates pour le rosaire de Biber a été récompensé
                    par un « Choc » du Monde la Musique.
                </p>
                <p>
                    Elle est chef de chant au Centre de Musique Baroque de Versailles, enseigne le
                    clavecin au Conservatoire à Rayonnement Régional de Reims et la basse continue
                    au Conservatoire à Rayonnement Départemental d'Orsay.
                </p>
                <p>
                    Hélène Dufour est chef de chant pour le{" "}
                    <InnerLink to="/fr/stage-de-chant">stage de chant</InnerLink> et travaillera
                    avec les clavecinistes du{" "}
                    <InnerLink to="/fr/stage-pour-chefs-de-chant">stage chefs de chant</InnerLink>
                </p>
            </div>
        }
    />
);
export default Helene;
