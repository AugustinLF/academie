import g from "glamorous";
import React from "react";

const GridContainer = g.div({
    marginLeft: -10,
    marginRight: -10,
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
        marginRight: 10,
        marginBottom: 20,
        marginLeft: 10,
        flexBasis: `calc(50% - 20px)`,
        flexGrow: 0,
        flexShrink: 0,
    },
});

const Grid = ({children}) => <GridContainer>{children}</GridContainer>;
export default Grid;
