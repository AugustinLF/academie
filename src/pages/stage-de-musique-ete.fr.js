import React from "react";
import Helmet from "react-helmet";

import {H2} from "../components/base";
import Page from "../components/page";
import Lead from "../components/lead";
import ProgrammeList from "../components/programmeList";
import Layout from "../layouts/fr";

const Programme = props => (
    <Layout location={props.location}>
        <Helmet>
            <meta
                name="keywords"
                content="Stage de chant, stage choral, stage de chant choral, stage de direction de chœur, stage continuo, stage clavecin, stage été 2020, stage août 2020, stage musique 2020"
            />
        </Helmet>
        <Page title="Les stages de musique : été 2020">
            <Lead>
                <p>
                    L'Académie d'été du Capriccio Français propose un stage de chant, u un stage pour chefs de chant ainsi qu’un stage de chant
                    choral. Elle se déroulera du 23 au 30 août 2020 sur les hauteurs du Lac d'Annecy en Haute-Savoie.
                </p>
                
            </Lead>
            <H2>Les stages</H2>
            <ProgrammeList language="fr" />
        </Page>
    </Layout>
);

export default Programme;
