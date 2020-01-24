import g from "glamorous";
import React from "react";
import {FormattedMessage} from "react-intl";

import {InnerLink} from "../../components/base";
import SelectLanguage from "../../components/selectLanguage";

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
const cellStyle = {
    padding: "10px 20px",
    fontSize: 24,
};
const MenuLink = g(InnerLink)({
    ...cellStyle,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    borderBottom: "solid 1px black",
});

const BottomSelectLanguage = g(SelectLanguage)({
    marginTop: "auto",
    ...cellStyle,
});

const MobileMenu = ({open, closeMenu, homeLink, langsMenu}) => (
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
        <BottomSelectLanguage langsMenu={langsMenu} />
    </SideMenu>
);
export default MobileMenu;
