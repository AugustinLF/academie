import React from "react";
import g from "glamorous";

import Lead from "./lead";

const Img = g.div(
    {
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    ({src}) => ({
        backgroundImage: `url(${src})`,
    })
);

const LeadImage = ({src, alt}) => (
    <Lead>
        <Img src={src} />
    </Lead>
);

export default LeadImage;
