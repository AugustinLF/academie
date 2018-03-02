import g from "glamorous";
import React from "react";
import Link from "gatsby-link";
import {FormattedMessage} from "react-intl";

import {InnerLink} from "../../components/base";

const SideMenu = g.div(
    {
        position: "fixed",
        width: "100%",
        top: 51,
        bottom: 0,
        left: 0,
        animation: "",
        backgroundColor: "white",
        transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
    },
    ({open}) => ({
        transform: open ? "translateX(0%)" : "translateX(-100%)",
    })
);
const MenuLink = g(InnerLink)({
    height: 60,
    paddingLeft: 20,
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    borderBottom: "solid 1px black",
});

const MobileMenu = ({open, closeMenu, homeLink}) => (
    <SideMenu open={open}>
        <MenuLink to={homeLink} onClick={closeMenu}>
            <FormattedMessage id="home" />
        </MenuLink>
        <MenuLink to={`${homeLink}stage-de-musique-ete`} onClick={closeMenu}>
            <FormattedMessage id="programme" />
        </MenuLink>
        <MenuLink to={`${homeLink}les-enseignants`} onClick={closeMenu}>
            <FormattedMessage id="enseignants" />
        </MenuLink>
        <MenuLink to={`${homeLink}informations`} onClick={closeMenu}>
            <FormattedMessage id="informations" />
        </MenuLink>
        <MenuLink to={`${homeLink}contact`} onClick={closeMenu}>
            <FormattedMessage id="contact" />
        </MenuLink>
    </SideMenu>
);
export default MobileMenu;
