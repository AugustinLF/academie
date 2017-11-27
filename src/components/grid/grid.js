import g from "glamorous";
import React from "react";

const GridContainer = g.div(({count}) => ({
    marginLeft: -10,
    marginRight: -10,
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 10,
        flexBasis: `calc(${100 / count}% - ${count * 10}px)`,
        flexGrow: 0,
        flexShrink: 0,
    },
}));

const Grid = ({count, children}) => <GridContainer count={count}>{children}</GridContainer>;
export default Grid;
