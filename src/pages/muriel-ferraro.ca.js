import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import muriel from "../muriel.jpg";

const Muriel = () => (
    <InnerPage
        name="Muriel Ferraro"
        title="Tècnica vocal per al cor i per al taller de direcció de cor"
        imgUrl={muriel}
        content={
            <div>
                <p>
                    Muriel Ferraro, soprano, va estudiar violí prèviament a decantar-se cap a la
                    lírica. Recentment se la pogut escoltar en la créaion de théâtre musical
                    Dell’Onesta Dissimulazione, a la Fundació Royaumont, en Les Méfaits du tabac,
                    concert en un acte concebut per Floriane Bonanni i posat en escena per Denis
                    Podaydès. Les Lessiveuses, òpera de Thierry Machuel amb l’ensemble 2E2M, posada
                    en escena per Christian Gangneron.
                </p>
                <p>
                    Ha interpretat el paper de Vénus en Tannhaüser a l’òpera de Clermont-Ferrand,
                    els Wesendonck Lieder al Palais Beauharmais; Marie dans Wozzeck, Fondation
                    Royaumont, posada en escena André Engel, extractes del paper de Brünnhilde per
                    la represa de Nietzsche/Wagner: le Ring al Théâtre de l’Athénée, posada en
                    escena Alain Bézu, direcció Dominique Debart, Orchestre Lamoureux; L’Egisto,
                    paper titular de Mazzocchi et Marazzoli (1648) amb Les Paladins sota la direcció
                    de Jérôme Corréas i posada en escena de Jean-Denis Monory; Ma, espectacle públic
                    jove de la Compagnie Eclats, autor dels Chants du Capricorne de Giacinto Scelsi
                    a l’Amphithéâtre de l’Opéra Bastille, així com els papers d’Agathe en Les
                    Enfants Terribles de Philip Glas, posada en escena P. Desveaux; Giovanna en
                    Rigoletto, de Mélanie Thiébaut; Dulcinée en Don Quichotte segons Massenet amb la
                    Compagnie Étoile du Jour; la Baronne Aspasia en La Pietra del Paragone de
                    Rossini amb La Clef des Chants; la Reine des Elfes en Der Rose Pilgerfahrt de
                    Schumann a la Folle Journée de Nantes.
                </p>
                <p>
                    Muriel Ferraro ensenya cant al Centre de Musique Baroque de Versailles i al
                    Département pour Jeunes Chanteurs du CRR de Paris. Ensenya també tècnica vocal
                    en dos cors de la regió parisenca: el cor de l’Assemblée Nationale i el conjunt
                    vocal Folia.
                </p>
            </div>
        }
    />
);
export default Muriel;
