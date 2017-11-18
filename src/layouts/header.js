import React from "react";
import Link from "gatsby-link";
import g from "glamorous";

import logo from "./logo.png";
import SelectLanguage from "../components/selectLanguage";
import {tabletUp, phone} from "../components/mediaQueries";

const HeaderContainer = g.div({
    [tabletUp]: {
        padding: 10,
        justifyContent: "space-between",
    },
    display: "flex",
    [phone]: {
        flexDirection: "column",
    },
});

const Img = g.img({
    width: 554,
    height: 84,
    [phone]: {
        width: "90%",
    },
});

const Header = ({langs}) => (
    <HeaderContainer>
        <Link to="/">{/* <Img src={logo} alt="Logo" /> */}</Link>
        <SelectLanguage langs={langs} />
    </HeaderContainer>
);

export default Header;
