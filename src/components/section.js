import React from "react";
import g from "glamorous";

import {H2} from "./base";

const SectionContainer = g.div({
    ":not(:last-child)": {
        marginBottom: 40,
    },
});

const Section = ({title, children}) => (
    <SectionContainer>
        <H2>{title}</H2>
        {children}
    </SectionContainer>
);
export default Section;
