import React from 'react';
import Link from 'gatsby-link';
import g from 'glamorous';

import logo from './logo.png';
import SelectLanguage from '../components/selectLanguage';

const HeaderContainer = g.div({
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
});

const Header = ({langs}) => (
    <HeaderContainer>
        <Link to="/">
            <img src={logo} alt="Logo" width="554" height="84" />
        </Link>
        <SelectLanguage langs={langs} />
    </HeaderContainer>
);

export default Header;
