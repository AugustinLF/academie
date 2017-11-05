import g from "glamorous";

const TwoColumns = g.div({
    marginRight: -50,
    display: "flex",
    flexWrap: "wrap",
    "&> div": {
        marginRight: 50,
        marginBottom: 30,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: "calc(50% - 50px)",
    },
});
export default TwoColumns;
