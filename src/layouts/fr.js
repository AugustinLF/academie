import React from "react";
import {addLocaleData} from "react-intl";
import Helmet from "react-helmet";

import Layout from "./index";
import messages from "../data/messages/fr";
import fr from "react-intl/locale-data/fr";
import "intl/locale-data/jsonp/fr";

addLocaleData(fr);

export default ({children, ...props}) => (
    <Layout {...props} i18nMessages={messages}>
        <Helmet>
            <meta
                name="keywords"
                content="Stage de chant, stage choral, stage de chant choral, stage de direction de chœur, stage continuo, stage clavecin, stage été 2020, stage août 2020, stage musique 2020"
            />
        </Helmet>
        {children}
    </Layout>
);
