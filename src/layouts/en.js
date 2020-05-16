import React from "react";
import {addLocaleData} from "react-intl";
import Helmet from "react-helmet";

import Layout from "./index";
import messages from "../data/messages/en";
import en from "react-intl/locale-data/en";
import "intl/locale-data/jsonp/en";

addLocaleData(en);

export default ({children, ...props}) => (
    <Layout {...props} i18nMessages={messages}>
        <Helmet>
            <meta
                name="keywords"
                content=" Choral workshop, choir, choir conducting workshop, singing workshop, summer academy"
            />
        </Helmet>
        {children}
    </Layout>
);
