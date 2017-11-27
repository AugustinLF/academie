import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import {FormattedMessage} from "react-intl";

import logo from "./logo.png";
import SelectLanguage from "../components/selectLanguage";
import {tabletUp, phone} from "../components/mediaQueries";
import Menu from "./menu";
import {Link as OuterLink} from "../components/base";

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
    paddingRight: 30,
    paddingLeft: 30,
});

const Img = g.img({
    width: 554,
    height: 84,
    [phone]: {
        width: "90%",
    },
});
const Right = g.div({
    display: "flex",
    alignItems: "flex-start",
    "> *:not(:last-child)": {
        marginRight: 10,
    },
});

const Header = ({langs, homeLink}) => (
    <HeaderContainer>
        <Top>
            <Link to="/">
                <Img src={logo} alt="Logo" />
            </Link>
            <Right>
                <OuterLink href="http://capricciofrancais.com/inscription.php">
                    <FormattedMessage id="register" />
                </OuterLink>
                <SelectLanguage langs={langs} />
            </Right>
        </Top>
        <Menu homeLink={homeLink} />
    </HeaderContainer>
);

export default Header;
