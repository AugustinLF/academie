import React from "react";

import Home from "../components/home";
import Layout from "../layouts/ca";

import msg from "../data/indexMsg.ca";

const IndexPage = props => (
    <Layout location={props.location}>
        <Home msg={msg} />
    </Layout>
);

export default IndexPage;
