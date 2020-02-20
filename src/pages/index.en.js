import React from "react";
import Home from "../components/home";
import Layout from "../layouts/en";

import msg from "../data/indexMsg.en";

const IndexPage = props => (
    <Layout location={props.location}>
        <Home msg={msg} />
    </Layout>
);

export default IndexPage;
