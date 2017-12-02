import g from "glamorous";
import React from "react";

import {phone, tabletUp} from "../mediaQueries";

const GridContainer = g.div(({count}) => ({
    display: "flex",
    flexWrap: "wrap",
    [tabletUp]: {
        marginLeft: -10,
        marginRight: -10,
    },
    "& > *": {
        [tabletUp]: {
            marginRight: 10,
            marginLeft: 10,
            flexBasis: `calc(${100 / count}% - ${count * 10}px)`,
        },
        flexGrow: 0,
        flexShrink: 0,
        [phone]: {
            flexBasis: "100%",
            ":not(:last-child)": {
                marginBottom: 5,
            },
        },
        ":not(:last-child)": {
            marginBottom: 20,
        },
    },
}));

const Grid = ({count, children}) => <GridContainer count={count}>{children}</GridContainer>;
export default Grid;
