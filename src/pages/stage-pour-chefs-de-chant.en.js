import React from "react";
import g from "glamorous";

import {Link, InnerLink} from "../components/base";
import instrumental from "../instrumental.jpg";
import InnerPage from "../components/innerPage";

const ChoirConducting = () => (
    <InnerPage
        name="Vocal coach academy"
        imgUrl={instrumental}
        content={
            <div>
                <p>Coming soon.</p>
            </div>
        }
    />
);

export default ChoirConducting;
