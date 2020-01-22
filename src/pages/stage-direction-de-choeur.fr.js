import React from "react";

import choirConducting from "../choirConducting.jpg";
import InnerPage from "../components/innerPage";
import Layout from "../layouts/fr";

const ChoirConducting = (props) => (
    <Layout location={props.location}>
        <InnerPage
            name="Stage direction de chœur"
            imgUrl={choirConducting}
            content={
                <div>
                    <p>
                        Ce stage s'adresse à des étudiants inscrits dans un cursus de direction de
                        chœur et souhaitant aborder toutes les facettes du métier de chef de chœur,
                        et travailler quotidiennement avec un chœur école. Il est aussi destiné à
                        des chefs de chœur amateurs ou encore à des musiciens professionnels
                        (professeurs de formation musicale, professeurs de musique dans les lycées
                        et collèges, musiciens intervenants, etc.).
                    </p>
                    <p>
                        Le travail sur le rapport du geste au son sera au centre du stage, qui
                        s'articulera entre travail à la table fait en commun, gestique, conduite
                        d'une répétition, travail avec les choristes.
                    </p>
                </div>
            }
        />
    </Layout>
);

export default ChoirConducting;
