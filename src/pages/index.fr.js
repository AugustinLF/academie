import React from "react";
import Helmet from "react-helmet";

import Home from "../components/home";
import Layout from "../layouts/fr";

import msg from "../data/indexMsg.fr";

const IndexPage = props => (
    <Layout location={props.location}>
        <Helmet>
            <meta
                name="keywords"
                content="Stage de chant, stage choral, stage de chant choral, stage de direction de chœur, stage continuo, stage clavecin, stage été 2020, stage août 2020, stage musique 2020"
            />
        </Helmet>
        <Home msg={msg} />
    </Layout>
);

export default IndexPage;
