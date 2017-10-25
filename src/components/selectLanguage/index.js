import g from 'glamorous';
import React from 'react';
import Link from 'gatsby-link';

import en from './uk.png';
import fr from './france.png';

const flagMap = {en, fr};

const Container = g.div({
    display: 'flex',
});
const Language = g(Link)({
    display: 'flex',
    alignItems: 'center',
    ':not(:last-child)': {
        marginRight: 10,
    },
});
const LanguageImage = g.img({
    width: 23,
    height: 16,
    marginRight: 5,
});
const LanguageText = g.div({
    color: 'initial',
    textTransform: 'uppercase',
    textDecoration: 'none',
});

const SelectLanguage = ({langs}) => {
    const links = langs.map(
        lang =>
            console.log(lang) || (
                <Language to={lang.link} key={lang.langKey}>
                    <LanguageImage src={flagMap[lang.langKey]} />
                    <LanguageText selected={lang.selected}>{lang.langKey}</LanguageText>
                </Language>
            )
    );

    return <Container>{links}</Container>;
};

export default SelectLanguage;
