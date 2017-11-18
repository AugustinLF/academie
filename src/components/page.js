import g from "glamorous";
import React from "react";

import {H1} from "./base";

const PageContainer = g.div({width: 960});
const Title = g.div({
    height: 35,
    display: "flex",
    alignItems: "center",
    borderBottom: "solid 2px black",
    marginBottom: 20,
});

const Page = ({title, children}) => (
    <PageContainer>
        <Title>
            <H1>{title}</H1>
        </Title>
        {children}
    </PageContainer>
);
export default Page;
