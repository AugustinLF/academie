import React from 'react';
import Link from 'gatsby-link';
import {FormattedMessage} from 'react-intl';
import g from 'glamorous';

const MenuContainer = g.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 50px',
});
const MenuLink = g(Link)({
    color: 'initial',
    transition: 'color 0.15s ease 0s',
    textDecoration: 'none',
    '&:hover': {
        color: '#BFBFBF',
    },
});

const Menu = ({homeLink}) => (
    <MenuContainer>
        <MenuLink to={homeLink}>
            <FormattedMessage id="home" />
        </MenuLink>
        <MenuLink to={`${homeLink}programme`}>
            <FormattedMessage id="programme" />
        </MenuLink>
        <MenuLink to="/">
            <FormattedMessage id="enseignants" />
        </MenuLink>
        <MenuLink to="/">
            <FormattedMessage id="informations" />
        </MenuLink>
        <MenuLink to="/">
            <FormattedMessage id="faq" />
        </MenuLink>
        <MenuLink to="/">
            <FormattedMessage id="contact" />
        </MenuLink>
    </MenuContainer>
);
export default Menu;
