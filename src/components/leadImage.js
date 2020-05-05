import React from "react";
import g from "glamorous";

import Lead from "./lead";

const Img = g.div(
    {
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    ({src, height = 400}) => ({
        backgroundImage: `url(${src})`,
        height,
    })
);

const LeadImage = ({src, alt, height}) => (
    <Lead>
        <Img src={src} height={height} />
    </Lead>
);

export default LeadImage;
