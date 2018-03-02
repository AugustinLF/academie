import React from "react";
import g from "glamorous";
import {FormattedMessage} from "react-intl";

import SelectLanguage from "../../components/selectLanguage";
import {tabletUp, phone} from "../../components/mediaQueries";
import DesktopMenu from "./desktopMenu";
import MobileHeader from "./mobileHeader";
import Logo from "./logo";
import {Link as OuterLink} from "../../components/base";
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
const Top = g.div({
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 30,
    paddingLeft: 30,
    [phone]: {
        flexDirection: "column",
    },
});

const Right = g.div({
    display: "flex",
    [tabletUp]: {
        alignItems: "flex-start",
        "> *:not(:last-child)": {
            marginRight: 10,
        },
    },
    [phone]: {
        margin: "20px 0",
        flexDirection: "column",
        alignItems: "center",
        "> *:not(:last-child)": {
            marginBottom: 10,
        },
    },
});

const Header = ({langs, homeLink, langKey}) => (
    <HeaderContainer>
        <MobileHeader homeLink={homeLink} langKey={langKey} />
        <Top>
            <Logo langKey={langKey} />
            <Right>
                <Register langkey={langKey} />
                <SelectLanguage langs={langs} />
            </Right>
        </Top>
        <DesktopMenu homeLink={homeLink} />
    </HeaderContainer>
);

export default Header;
