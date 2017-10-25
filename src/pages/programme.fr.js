import React from 'react';
import Link from 'gatsby-link';

import Page from '../components/page';
import ProgramItem from '../components/programItem';

import vocalImage from '../vocal.png';

const Programme = () => (
    <Page title="Les différents stages de l'Académie">
        <p>
            L'Académie d'été du Capriccio Français propose un stage pour chanteurs, clavecinistes,
            étudiants en direction de chœur, ainsi qu’un stage choral, du 16 juillet en fin de
            journée au 23 juillet 2017 (départ le matin du 24). L'Académie se déroule à Barcelone
            dans la Casa Sant Felip Neri, un ancien couvent, aujourd'hui lieu d'accueil de
            rencontres, notamment musicales. Un stage de danse baroque sera également organisé du 21
            au 23 juillet
        </p>

        <p>
            Les stagiaires développeront leurs compétences techniques, mais aussi stylistiques sur
            le répertoire de la musique ancienne. Tous les stagiaires bénéficient d'un atelier
            complémentaire sur la danse baroque, faisant ainsi écho à leur pratique
            d'instrumentistes, de chanteurs ou de choristes.
        </p>

        <p>
            Tout au long du stage, chanteurs, instrumentistes, choristes travaillent régulièrement
            ensemble, mettant ainsi en commun leurs connaissances stylistiques, tout en préparant le
            concert de fin de stage. Celui-ci aura lieu le dimanche 23 juillet 2017 à 17h00 à
            l'Església de Sant Gaietà. Des auditions viennent ponctuer le stage, multipliant ainsi
            la possibilité de mesurer le travail accompli.
        </p>

        <p>
            Pour les instrumentistes et chanteurs, le profil des stagiaires est au minimum de 3ème
            cycle de conservatoire. Nous accueillons aussi des artistes professionnels ou des
            enseignants, dans le cadre de la formation professionnelle. Pour les chefs de chœurs, ce
            stage s'adresse à des étudiants inscrits dans un cursus de direction de chœur, à des
            amateurs déjà en responsabilité d'un chœur ou à des professionnels de la musique
            souhaitant développer leurs compétences dans ce domaine. Pour les choristes, la taille
            du chœur est limitée à 28 chanteurs, avec équilibre des pupitres. Une bonne expérience
            du travail de chœur est recommandée.
        </p>
        <ProgramItem
            title="Stage de chant"
            imageUrl={vocalImage}
            imageAlt="stage de chant"
            content={
                <div>
                    <p>
                        Ce stage associe technique vocale et interprétation de la musique baroque.
                        Les chanteurs partageront leur temps entre répertoire soliste, travail de
                        rôle et musique d’ensemble. Chaque journée débute par un cours collectif sur
                        les questions relatives à la posture et à la respiration.
                    </p>

                    <p>
                        Chaque stagiaire reçoit quotidiennement un cours de technique vocale avec
                        Isabelle Germain. Avec Hélène Dufour et Stefano Intrieri, les stagiaires
                        travaillent, soit de façon individuelle en interprétation, soit en petit
                        groupe en musique de chambre. Avec Josep Cabré, les stagiaires travaillent
                        plus particulièrement le répertoire polyphonique.
                    </p>
                </div>
            }
        />
    </Page>
);

export default Programme;
