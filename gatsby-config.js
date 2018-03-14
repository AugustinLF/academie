const autoprefixer = require("autoprefixer");

const languages = require("./src/data/languages");
const config = require("./local.js");

module.exports = {
    siteMetadata: {
        title: `Académie d'été du Capriccio Français`,
        languages,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-glamor`,
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["Open Sans"],
            },
        },
        {
            resolve: "gatsby-plugin-i18n",
            options: {
                langKeyForNull: "any",
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalyticsId,
                anonymize: true,
                respectDNT: true,
            },
        },
    ],
};
