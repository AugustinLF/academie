import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";
import {IntlProvider} from "react-intl";
import "intl";

import "./reset.css";
import "./index.css";
import Header from "./header";
import Body from "../components/body";
import SocialMedia from "./social";

const TemplateWrapper = ({children, data, location, i18nMessages}) => {
    const url = location.pathname;
    const {langs, defaultLangKey} = data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

    return (
        <IntlProvider locale={langKey} messages={i18nMessages}>
            <div>
                <Helmet
                    title={
                        langKey === "fr"
                            ? "Académie d'été du Capriccio Français"
                            : "Capriccio Français Summer Academy"
                    }
                    meta={[
                        {name: "description", content: "Sample"},
                        {name: "keywords", content: "sample, something"},
                    ]}
                >
                    <link rel="icon" href="/favicon.jpg" />
                </Helmet>
                <Body>
                    <Header langs={langsMenu} homeLink={homeLink} langKey={langKey} />
                    {children()}
                    <SocialMedia />
                </Body>
            </div>
        </IntlProvider>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;

export const pageQuery = graphql`
    query Layout {
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
