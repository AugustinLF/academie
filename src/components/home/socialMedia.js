import g from "glamorous";
import React from "react";

import {Link} from "../base";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";

const Container = g.div({
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
    "&>*": {
        ":not(:last-child)": {
            marginRight: 20,
        },
    },
});

const SocialMedia = () => (
    <Container>
        <Link href="https://twitter.com/lecapriccio">
            <img src={twitter} alt="twitter" width="35" height="35" />
        </Link>
        <Link href="https://www.facebook.com/Le.Capriccio.Francais">
            <img src={facebook} alt="facebook" width="35" height="35" />
        </Link>
    </Container>
);
export default SocialMedia;
