import React from "react";
import g from "glamorous";

import SelectLanguage from "../../components/selectLanguage";
import SocialMedia from "../social";
import {phone, tabletUp} from "../../components/mediaQueries";

const FooterContainer = g.div({
    display: "flex",
    marginTop: 20,
    marginBottom: 10,
    flexAlign: "space-between",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    [phone]: {
        alignSelf: "stretch",
    },
    [tabletUp]: {
        width: 960,
    },
});

const Footer = ({langsMenu}) => (
    <FooterContainer>
        <SocialMedia />
        <SelectLanguage langsMenu={langsMenu} />
    </FooterContainer>
);
export default Footer;
