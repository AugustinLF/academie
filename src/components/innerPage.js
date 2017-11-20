import g from "glamorous";
import React from "react";

import {H1, H2} from "../components/base";

const Main = g.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
const Picture = g.img({
    height: 300,
    marginBottom: 20,
});
const Content = g.div({
    width: 960,
});

const InnerPage = ({imgUrl, content, name, title}) => (
    <Main>
        <H1>{name}</H1>
        <H2>{title}</H2>
        <Picture src={imgUrl} />
        <Content>{content}</Content>
    </Main>
);
export default InnerPage;
