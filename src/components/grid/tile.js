import g from "glamorous";
import RawLink from "gatsby-link";
import React from "react";
import {FormattedMessage} from "react-intl";

import {H3} from "../base";
import {phone} from "../mediaQueries";

const TileContainer = g(RawLink)({
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    display: "flex",
    alignItems: "flex-start",
    textDecoration: "none",
    height: 250,
    ":hover": {
        "& > div:first-child": {
            transform: "scale(1.1)",
        },
        "& > div:last-child": {
            transform: "translateY(0)",
        },
    },
    [phone]: {
        "& > div:last-child": {
            transform: "translateY(0)",
        },
    },
});
const Title = g(H3)({
    color: "white",
    zIndex: 1,
    marginLeft: 10,
    marginTop: 10,
});

const PictureBackground = g.div(
    {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        transition: "all 0.2s",
        [phone]: {
            backgroundPosition: "center",
        },
    },
    ({imgUrl}) => ({
        backgroundImage: `url(${imgUrl})`,
    })
);
const Background = g.div({
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    pointerEvents: "none",
    backgroundColor: "black",
    opacity: 0.3,
});
const Content = g.div({
    transition: "all 0.2s",
    transform: "translateY(calc(100% - 50px))",
    marginTop: "auto",
    minHeight: 50,
    zIndex: 1,
    color: "white",
    padding: 10,
    position: "relative",
    alignSelf: "stretch",
});

const Tile = ({imgUrl, titleId, title, content, link}) => (
    <TileContainer to={link}>
        <PictureBackground imgUrl={imgUrl} />
        <Title>{titleId ? <FormattedMessage id={titleId} /> : title}</Title>
        <Content>
            <FormattedMessage style={{zIndex: 0}} id={content} />
            <Background />
        </Content>
    </TileContainer>
);

export default Tile;
