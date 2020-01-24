import Link from "gatsby-link";
import g from "glamorous";
import React from "react";

import {phone} from "../../components/mediaQueries";
import logo from "./logo.png";

const Img = g.img({
    width: 554,
    [phone]: {
        width: "100%",
    },
});

const LogoLink = g(Link)({
    [phone]: {
        display: "none",
    },
});

const Logo = ({langKey}) => (
    <LogoLink to={`/${langKey}`}>
        <Img src={logo} alt="Logo" />
    </LogoLink>
);
export default Logo;
