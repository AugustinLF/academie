import React from "react";
import g from "glamorous";
import {phone} from "./mediaQueries";

import Lead from "./lead";

const Img = g.div(
    {
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    ({src, big}) => ({
        backgroundImage: `url(${src})`,
        height: big ? 600 : 400,
        [phone]: {
            height: 400,
        },
    })
);

const LeadImage = ({src, alt, big}) => (
    <Lead noMargin>
        <Img src={src} big={big} />
    </Lead>
);

export default LeadImage;
