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
import {msg as msgFr} from "../pages/index.fr";
import {msg as msgEn} from "../pages/index.en";
import {msg as msgCa} from "../pages/index.ca";

const description = {
    fr: msgFr.academy.content,
    en: msgEn.academy.content,
    ca: msgCa.academy.content,
};

const title = {
    fr: "Académie d'été du Capriccio Français",
    en: "Capriccio Français Summer Academy",
    ca: "Académie d’estiu Del Capriccio Français",
};

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
                    title={title[langKey]}
                    meta={[{name: "description", content: description[langKey]}]}
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
