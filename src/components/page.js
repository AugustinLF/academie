import g from "glamorous";
import React from "react";

import {H1} from "./base";
import {phone} from "./mediaQueries";

const PageContainer = g.div({
    width: 960,
    paddingTop: 40,
    [phone]: {
        width: "100%",
    },
});
const Title = g.div({
    display: "flex",
    alignItems: "center",
    borderBottom: "solid 2px black",
    marginBottom: 20,
    [phone]: {
        paddingLeft: 20,
        paddingRight: 20,
    },
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
