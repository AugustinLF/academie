const autoprefixer = require('autoprefixer');

const languages = require('./src/data/languages');

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        languages,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                postCssPlugins: [
                    autoprefixer({
                        browsers: ['last 2 versions'],
                    }),
                ],
                precision: 8,
            },
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyForNull: 'any',
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: true,
            },
        },
    ],
};
