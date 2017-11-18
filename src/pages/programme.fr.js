import React from "react";

import {InnerLink, H2, H3} from "../components/base";
import Page from "../components/page";
import Lead from "../components/lead";

const Programme = () => (
    <Page title="Les différents stages de l'académie">
        <Lead>
            <p>
                L'Académie d'été du Capriccio Français propose un stage pour chanteurs, étudiants en
                direction de chœur, ainsi qu’un stage choral, du 15 juillet en fin de journée au 22
                juillet 2017 (départ le matin du 23). L'Académie se déroule à Barcelone dans la Casa
                Sant Felip Neri, un ancien couvent, aujourd'hui lieu d'accueil de rencontres,
                notamment musicales. Un stage de danse baroque sera également organisé du 21 au 23
                juillet.
            </p>
            <p>
                Un concert de fin se stage aura lieu le dimanche 22 juillet 2017 à 17h00 à
                l'Església de Sant Gaietà.
            </p>
        </Lead>
        <H2>Les stages</H2>
        <H3>
            <InnerLink to="/fr/vocal">Stage vocal</InnerLink>
        </H3>
        <div>
            <p>
                Les stagiaires choisissent entre deux options : avec Maarten Koningsberger et les
                chefs de chant, le stage associe technique vocale et interprétation de la musique
                baroque. Avec Josep Cabré, les stagiaires travaillent dans un but de production :
                l’oratorio XXX sera donné à l’issue de la semaine.
            </p>
        </div>
        <H3>
            <InnerLink to="/fr/vocal">Stage direction de chœur</InnerLink>
        </H3>
        <div>
            <p>
                Ce stage s'adresse à des étudiants inscrits dans un cursus de direction de chœur et
                souhaitant aborder toutes les facettes du métier de chef de chœur, et travailler
                quotidiennement avec un chœur école. Il est aussi destiné à des chefs de chœur
                amateurs ou encore à des musiciens professionnels souhaitant se former à la
                direction de chœur.
            </p>
        </div>
        <H3>
            <InnerLink to="/fr/vocal">Stage choral</InnerLink>
        </H3>
        <div>
            <p>
                Le chœur est dirigé par Philippe Le Fèvre, directeur musical de l'académie, et par
                Josep Cabré. Le chœur compte 28 choristes maximum avec équilibre des pupitres. Il
                s'adresse à des choristes expérimentés souhaitant se plonger dans le répertoire de
                musique ancienne.
            </p>
        </div>
    </Page>
);

export default Programme;
