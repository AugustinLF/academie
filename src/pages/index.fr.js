import React from "react";

import Home from "../components/home";
import Layout from "../layouts/fr";

import msg from "../data/indexMsg.fr";

const IndexPage = props => (
    <Layout location={props.location}>
        <Home msg={msg} />
    </Layout>
);

export default IndexPage;
