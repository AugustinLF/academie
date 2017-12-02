import React from "react";
import Link from "gatsby-link";
import {FormattedMessage} from "react-intl";
import g from "glamorous";

import {phone, tabletUp} from "../components/mediaQueries";

const MenuContainer = g.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [tabletUp]: {
        padding: "30px 50px",
    },
    flexWrap: "wrap",
    [phone]: {
        justifyContent: "space-around",
        padding: "0 10px 10px 10px",
    },
});
const MenuLink = g(Link)({
    color: "initial",
    transition: "color 0.15s ease 0s",
    textDecoration: "none",
    "&:hover": {
        color: "#BFBFBF",
    },
    [phone]: {
        margin: "5px 20px",
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
        <MenuLink to={`${homeLink}enseignants`}>
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
