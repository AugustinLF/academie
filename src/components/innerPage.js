import g from "glamorous";
import React from "react";

import {H1, H2} from "../components/base";
import {phone, tabletUp} from "./mediaQueries";

const Main = g.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
const Picture = g.img({
    marginBottom: 20,

    [tabletUp]: {
        height: 300,
    },
    [phone]: {
        width: "90%",
    },
});
const Content = g.div({
    width: 760,
    [phone]: {
        width: "90%",
    },
});
const SubTitle = g(H2)({
    textAlign: "center",
    maxWidth: 600,
});

const InnerPage = ({imgUrl, content, name, title}) => (
    <Main>
        <H1>{name}</H1>
        <SubTitle>{title}</SubTitle>
        <Picture src={imgUrl} />
        <Content>{content}</Content>
    </Main>
);
export default InnerPage;
