import RawLink from "gatsby-link";
import g from "glamorous";
import React from "react";

export const H1 = g.h1({
    fontFamily: '"Courier New", courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace',
    fontSize: 35,
    paddingBottom: 10,
});
export const H2 = g.h2({
    fontFamily: '"Courier New", courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace',
    fontSize: 25,
    paddingBottom: 8,
});
export const H3 = g.h3({
    fontFamily: '"Courier New", courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace',
    fontSize: 20,
});
export const TextBlock = g.div({});

export const Link = g.a({
    color: "initial",
});
export const InnerLink = g(RawLink)({
    color: "initial",
});

const Relative = g.div(({height}) => ({
    position: "relative",
    height,
}));

const FullAbsolute = g.div({
    position: "absolute",
    top: 0,
    left: "calc((100vw - 960px) / -2)",
    bottom: 0,
    width: "100vw",
    display: "flex",
    alignItems: "stretch",
    zIndex: -1,
});
export const FullWidth = ({height, background, children}) => (
    <Relative height={height}>
        {children}
        {background && <FullAbsolute>{background}</FullAbsolute>}
    </Relative>
);

export const List = g.ul({
    marginBottom: 20,
});
export const ListItem = g.li({
    listStyle: "initial",
    marginLeft: 30,
});
