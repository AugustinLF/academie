import React from "react";
import graphql from "graphql";
import Layout from "./index";
import {addLocaleData} from "react-intl";

import messages from "../data/messages/ca";
import ca from "react-intl/locale-data/ca";
import "intl/locale-data/jsonp/ca";

addLocaleData(ca);

export default props => <Layout {...props} i18nMessages={messages} />;

export const pageQuery = graphql`
    query LayoutCa {
        site {
            siteMetadata {
                languages {
                    defaultLangKey
                    langs
                }
            }
        }
    }
`;
