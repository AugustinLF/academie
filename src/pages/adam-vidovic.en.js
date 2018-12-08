import React from "react";

import {Link, InnerLink} from "../components/base";
import InnerPage from "../components/innerPage";
import adam from "../adam.jpg";

const Adam = () => (
    <InnerPage
        name="Adam Vidovic"
        title="Choir and choir conducting"
        imgUrl={adam}
        content={
            <div>
                <p>
                    Adam Vidovic is a British musician born in Rome, raised in London and now living
                    and working in France. He studied the piano, the organ (with Catherine Ennis and
                    Andrew Lumsden), the bassoon and singing at Christ’s Hospital School in Sussex.
                    After his bachelors degree in languages from the University of Manchester, he
                    went on to study the organ with Marie-Louise Langlais at the Paris Conservatoire
                    (CRR) obtaining a ‘Premier Prix’ in 1996, and pursued his organ studies at the
                    Lyon Conservatoire (CRR) with Louis Robillard. He later obtained a diploma (DEM)
                    in choral conducting with Ariel Alonso at the Ecole nationale de musique de
                    Créteil, and studied orchestral conducting in Lille with Jean-Sébastien Béreau.
                    Most recently he trained as a sophrologist.
                </p>
                <p>
                    Today Adam Vidovic works as a choir master with numerous choirs and choral
                    societies. He teaches in two of Paris’ conservatoires, and at the Paris
                    Institute of Political Sciences (SciencesPo). He has collaborated with
                    contemporary dance companies, worked on musicals (CRÉA) and played the harmonium
                    with Diabolicus, an ensemble made up of soloists from the Orchestre de Paris.
                </p>
                <p>
                    In 2008 he won a special prize at the International Festival of Advent and
                    Christmas music in Prague for « inspirational conducting ».de (Gaspard
                    Yurkievich).
                </p>
                <p>
                    Adam Vidovic conducts, with{" "}
                    <InnerLink to="/fr/philippe-le-fevre">Philippe Le Fèvre</InnerLink> the Academy
                    choir and teaches the students of the choir conducting program (beginners
                    level).
                </p>
            </div>
        }
    />
);
export default Adam;
