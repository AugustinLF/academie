import React from "react";

import {Link} from "../components/base";
import InnerPage from "../components/innerPage";
import muriel from "../muriel.jpg";

const Muriel = () => (
    <InnerPage
        name="Muriel Ferraro"
        title="Technique vocale pour le chœur et pour les stagiaires en direction de chœur"
        imgUrl={muriel}
        content={
            <div>
                <p>
                    Muriel Ferraro, soprano, a d'abord étudié le violon, avant de se tourner vers
                    l'art lyrique. Récemment on a pu l’entendre dans la création de théâtre musical
                    Dell’Onesta Dissimulazione, à la Fondation Royaumont, dans Les Méfaits du tabac,
                    Concert en un acte conçu par Floriane Bonanni et mis en scène par Denis
                    Podalydès, Les Lessiveuses, un opéra de Thierry Machuel avec l’ensemble 2E2M,
                    mis en scène par Christian Gangneron.
                </p>
                <p>
                    Elle a également interprété le rôle de Vénus dans Tannhaüser à l’opéra de
                    Clermont-Ferrand ; les Wesendonck Lieder au Palais Beauharnais ; Marie dans
                    Wozzeck, Fondation Royaumont, mise en scène André Engel, des extraits du rôle de
                    Brünnhilde pour la reprise de Nietzsche/Wagner : le Ring au Théâtre de
                    l’Athénée, mise en scène Alain Bézu, direction Dominique Debart, Orchestre
                    Lamoureux ; L’Egisto, rôle titre, de Mazzocchi et Marazzoli (1648) avec Les
                    Paladins sous la direction de Jérôme Corréas et mise en scène Jean-Denis Monory
                    ; Ma, spectacle jeune public de la Compagnie Eclats, autour des Chants du
                    Capricorne de Giacinto Scelsi à l’Amphithéâtre de l’Opéra Bastille, ainsi que
                    les rôles d’Agathe dans Les Enfants terribles de Philip Glass, mise en scène P.
                    Desveaux ; Giovanna dans Rigoletto, de Mélanie Thiébaut ; Dulcinée dans Don
                    Quichotte d’après Massenet avec la Compagnie Étoile du Jour ; la Baronne Aspasia
                    dans La Pietra del Paragone de Rossini avec La Clef des Chants ; la Reine des
                    Elfes dans Der Rose Pilgerfahrt de Schumann à la Folle Journée de Nantes.
                </p>
                <p>
                    Muriel Ferraro enseigne le chant au{" "}
                    <Link href="http://www.cmbv.fr/formation/">
                        Centre de Musique Baroque de Versailles
                    </Link>{" "}
                    et au Département pour Jeunes Chanteurs du CRR de Paris. Elle enseigne également
                    la technique vocale dans trois chœurs de la région parisienne: le chœur de
                    l'Assemblée Nationale, le chœur de Malestroit et l'ensemble vocal Folia.
                </p>
            </div>
        }
    />
);
export default Muriel;
