import React from "react";
import Link from "gatsby-link";
import g from "glamorous";

import logo from "./logo.png";
import SelectLanguage from "../components/selectLanguage";
import {tabletUp, phone} from "../components/mediaQueries";
import Menu from "./menu";

const HeaderContainer = g.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    [tabletUp]: {
        width: 1200,
        maxWidth: "100vw",
        paddingTop: 20,
    },
});
const Top = g.div({
    display: "flex",
    justifyContent: "space-between",
});

const Img = g.img({
    width: 554,
    height: 84,
    [phone]: {
        width: "90%",
    },
});

const Header = ({langs, homeLink}) => (
    <HeaderContainer>
        <Top>
            <Link to="/">
                <Img src={logo} alt="Logo" />
            </Link>
            <SelectLanguage langs={langs} />
        </Top>
        <Menu homeLink={homeLink} />
    </HeaderContainer>
);

export default Header;
