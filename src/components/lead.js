import g from "glamorous";

import {phone} from "./mediaQueries";

const Lead = g.div(
    {
        paddingBottom: 30,
    },
    ({noMargin}) =>
        noMargin
            ? {}
            : {
                  [phone]: {
                      paddingLeft: 20,
                      paddingRight: 20,
                  },
              }
);
export default Lead;
