import React from 'react';
import Link from 'gatsby-link';

import logo from './logo.png';
import './header.scss';
import SelectLanguage from '../components/selectLanguage';

const Header = ({langs}) =>
    console.log(langs) || (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Logo" width="554" height="84" />
            </Link>
            <SelectLanguage langs={langs} />
        </div>
    );

export default Header;
