import React from 'react';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';

import './menu.scss';

const Menu = ({homeLink}) => (
    <div className="menu">
        <Link to={homeLink}>
            <FormattedMessage id="home" />
        </Link>
        <Link to={`${homeLink}programme`}>
            <FormattedMessage id="programme" />
        </Link>
        <Link to="/">
            <FormattedMessage id="enseignants" />
        </Link>
        <Link to="/">
            <FormattedMessage id="informations" />
        </Link>
        <Link to="/">
            <FormattedMessage id="faq" />
        </Link>
        <Link to="/">
            <FormattedMessage id="contact" />
        </Link>
    </div>
);
export default Menu;
