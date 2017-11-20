import g from "glamorous";

import {phone, tabletUp} from "../mediaQueries";

export const BlockTitle = g.h2({
    textAlign: "center",
    fontSize: 35,
    [phone]: {
        fontSize: 20,
    },
});

const Block = g.div(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        [tabletUp]: {
            width: 960,
            padding: "0 100px",
        },
    },
    ({white}) => ({
        color: white ? "white" : "initial",
    })
);
export default Block;
