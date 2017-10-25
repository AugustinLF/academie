import React from 'react';

import Link from 'gatsby-link';

const SelectLanguage = props => {
    const links = props.langs.map(lang => (
        <Link to={lang.link} key={lang.langKey}>
            <li selected={lang.selected}>{lang.langKey}</li>
        </Link>
    ));

    return <ul>{links}</ul>;
};

export default SelectLanguage;
