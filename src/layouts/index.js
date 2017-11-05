import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";
import {IntlProvider} from "react-intl";
import "intl";
import "./reset.css";
import "./index.css";
import Header from "./header";
import Menu from "./menu";

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
                    title="Académie d'été du Capriccio Français"
                    meta={[
                        {name: "description", content: "Sample"},
                        {name: "keywords", content: "sample, something"},
                    ]}
                />
                <div
                    style={{
                        margin: "0 auto",
                        maxWidth: 960,
                        padding: "0px 1.0875rem 1.45rem",
                        paddingTop: 0,
                    }}
                >
                    <Header langs={langsMenu} />
                    <Menu homeLink={homeLink} />
                    {children()}
                </div>
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
