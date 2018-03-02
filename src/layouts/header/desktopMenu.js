import React from "react";
import Link from "gatsby-link";
import {FormattedMessage} from "react-intl";
import g from "glamorous";

import {phone} from "../../components/mediaQueries";

const MenuContainer = g.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 50px",
    flexWrap: "wrap",
    [phone]: {
        display: "none",
    },
});
const MenuLink = g(Link)({
    color: "initial",
    transition: "color 0.15s ease 0s",
    textDecoration: "none",
    "&:hover": {
        color: "#BFBFBF",
    },
});

const Menu = ({homeLink}) => (
    <MenuContainer>
        <MenuLink to={homeLink}>
            <FormattedMessage id="home" />
        </MenuLink>
        <MenuLink to={`${homeLink}stage-de-musique-ete`}>
            <FormattedMessage id="programme" />
        </MenuLink>
        <MenuLink to={`${homeLink}les-enseignants`}>
            <FormattedMessage id="enseignants" />
        </MenuLink>
        <MenuLink to={`${homeLink}informations`}>
            <FormattedMessage id="informations" />
        </MenuLink>
        <MenuLink to={`${homeLink}contact`}>
            <FormattedMessage id="contact" />
        </MenuLink>
    </MenuContainer>
);
export default Menu;
