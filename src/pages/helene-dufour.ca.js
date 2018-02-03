import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import helene from "../helene.jpg";

const Helene = () => (
    <InnerPage
        name="Hélène Dufour"
        title="Clave mestre de cant"
        imgUrl={helene}
        content={
            <div>
                <p>
                    Un cop acabats els seus estudis de clave al CNSM de Paris, Hélène Dufour es
                    perfecciona amb Jos Van Immerseel al Conservatori Royal Flamand d’Anvers i
                    treballa orgue amb Jean Boyer. És seleccionada pera formar part de tournées de
                    l’Orchestre Baroque de la Communauté Européenne on treballa amb Ton Koopman, Roy
                    Goodman i Jaap ter Linden. Toca en les més importants institucions de concerts
                    (Festival d’Art Sacré de Paris, Fondation Gulbenkian de Lisbonne, Festival
                    d’Utrecht, Conservatoire de Moscou...)
                </p>
                <p>
                    Hélène Dufour comparteix actualment la seva activitat entre la música de cambra
                    (duo amb el contra-tenor James Bowman, trio amb la Tempesta...) i el continuo
                    d’orquestra (Le Capriccio Français, la Réjouissance...) i els solos (concerts de
                    Bach, Manuel de Falla.. ) Ha realitzat nombrosos enregistraments: els motets
                    barrocs francesos (Diapason d’Or), dels concerti grossi amb l’ECBO.
                    L’enregistrament amb Patrick Bismuth dedicat a les sonates del segle XVII ha
                    rebut el premi de la Fondazione Cini de Venècia i el de les Sonates per al
                    rosari de Biber ha estat guardonat amb un “Choc” del Monde la Musique.
                </p>
                <p>
                    És mestre de cant al Centre de Musique Baroque de Versailles, ensenya clave al
                    Conservatori à Rayonnement Régional de Reims i baix continu al Conservatori à
                    Rayonnement Départemental d’Orsay.
                </p>
            </div>
        }
    />
);
export default Helene;
