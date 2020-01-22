import RawLink from "gatsby-link";
import g from "glamorous";
import React from "react";

import {phone} from "./mediaQueries";

export const H1 = g.h1({
    fontFamily: '"Courier New", courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace',
    fontSize: 35,
    paddingBottom: 10,
    [phone]: {
        fontSize: 26,
    },
});
export const H2 = g.h2({
    fontFamily: '"Courier New", courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace',
    fontSize: 25,
    [phone]: {
        fontSize: 20,
    },
    paddingBottom: 8,
});
export const H3 = g.h3({
    fontFamily: '"Courier New", courier-ps-w01, courier-ps-w02, courier-ps-w10, monospace',
    fontSize: 20,
    [phone]: {
        fontSize: 18,
    },
});

export const Link = g.a({
    color: "initial",
});
export const InnerLink = g(RawLink)({
    color: "initial",
});

const Relative = g.div(({height, mobile}) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    height,
    padding: !height ? "30px 0" : null,
    [phone]: {
        height: mobile,
        padding: !mobile ? "10px 0" : null,
    },
}));

const FullAbsolute = g.div({
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    display: "flex",
    alignItems: "stretch",
    zIndex: -1,
});
export const FullWidth = ({height, mobile, background, children}) => (
    <Relative height={height} mobile={mobile}>
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
export const NestedListItem = g.li({
    listStyle: "circle",
    marginLeft: 30,
});
export const Information = g.p({
    fontSize: "90%",
    fontStyle: "italic",
});

export const IframeContainer = g.div({
    display: "flex",
    justifyContent: "center",
    margin: "16px 0",
});
