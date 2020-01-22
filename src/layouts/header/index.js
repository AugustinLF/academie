import React from "react";
import g from "glamorous";

import {tabletUp, phone} from "../../components/mediaQueries";
import SelectLanguage from "../../components/selectLanguage";
import DesktopMenu from "./desktopMenu";
import MobileHeader from "./mobileHeader";
import Logo from "./logo";
import Register from "./register";

const HeaderContainer = g.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    [tabletUp]: {
        width: 1200,
        maxWidth: "100vw",
        paddingTop: 20,
    },
    [phone]: {
        width: "100%",
    },
});
const DesktopHeader = g.div({
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 30,
    paddingLeft: 30,
    [phone]: {
        display: "none",
    },
});

const Right = g.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
});

const Header = ({homeLink, langKey, langsMenu}) => (
    <HeaderContainer>
        <MobileHeader homeLink={homeLink} langKey={langKey} langsMenu={langsMenu} />
        <DesktopHeader>
            <Logo langKey={langKey} />
            <Right>
                <SelectLanguage langsMenu={langsMenu} />
                <Register langKey={langKey} />
            </Right>
        </DesktopHeader>
        <DesktopMenu homeLink={homeLink} />
    </HeaderContainer>
);

export default Header;
