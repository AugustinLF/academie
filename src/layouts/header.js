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
    [phone]: {
        paddingTop: 10,
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

const Img = g.img({
    width: 554,
    [phone]: {
        width: "100%",
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

const registrationLinks = {
    en: "http://capricciofrancais.com/registration.php",
    fr: "http://capricciofrancais.com/inscription.php",
    ca: "http://capricciofrancais.com/registration.php",
};

const Header = ({langs, homeLink, langKey}) => (
    <HeaderContainer>
        <Top>
            <Link to={`/${langKey}`}>
                <Img src={logo} alt="Logo" />
            </Link>
            <Right>
                <OuterLink href={registrationLinks[langKey]}>
                    <FormattedMessage id="register" />
                </OuterLink>
                <SelectLanguage langs={langs} />
            </Right>
        </Top>
        <Menu homeLink={homeLink} />
    </HeaderContainer>
);

export default Header;
