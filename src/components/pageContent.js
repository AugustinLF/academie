import g from "glamorous";

import {phone} from "./mediaQueries";

const PageContent = g.div({
    [phone]: {
        margin: "0 20px",
    },
});
export default PageContent;
