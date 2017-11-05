import g from "glamorous";

const Block = g.div(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "0 100px",
    },
    ({white}) => ({
        color: white ? "white" : "initial",
    })
);
export default Block;
